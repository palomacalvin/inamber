// app/api/upload/route.ts
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import Busboy from "busboy";
import { Readable } from "stream";
import React from "react";



// Convert Web ReadableStream to Node.js Readable stream
function streamFromWebReadable(webStream: ReadableStream<Uint8Array>): Readable {
  const reader = webStream.getReader();
  return new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) {
        this.push(null);
      } else {
        this.push(value);
      }
    },
  });
}

export async function POST(req: NextRequest) {

  const keyBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
if (!keyBase64) {
  console.error("Missing GOOGLE_SERVICE_ACCOUNT_KEY_BASE64");
  return NextResponse.json({ error: "Missing credentials" }, { status: 500 });
}
let credentials;
try {
  const decoded = Buffer.from(keyBase64, "base64").toString("utf-8");
  credentials = JSON.parse(decoded);
} catch (e) {
  console.error("Failed to decode or parse credentials:", e);
  return NextResponse.json({ error: "Invalid credentials" }, { status: 500 });
}

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive"],
});


const drive = google.drive({ version: "v3", auth });
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

  console.log("POST /api/upload hit");

  if (!FOLDER_ID) {
    return NextResponse.json({ error: "Missing folder ID" }, { status: 500 });
  }

  return new Promise((resolve, reject) => {
    const busboy = Busboy({ headers: Object.fromEntries(req.headers) });

    busboy.on("file", async (fieldname: string, file: NodeJS.ReadableStream, info: { filename: string; mimeType: string }) => {
      const { filename, mimeType } = info;

      try {
        const uploaded = await drive.files.create({
          requestBody: {
            name: filename,
            parents: [FOLDER_ID],
          },
          media: {
            mimeType,
            body: file,
          },
          fields: "id, name, webViewLink, webContentLink",
        });

        await drive.permissions.create({
          fileId: uploaded.data.id!,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        });

        const imageUrl = `https://drive.google.com/uc?export=view&id=${uploaded.data.id}`;
        resolve(NextResponse.json({
          success: true,
          imageUrl: `https://drive.google.com/uc?export=view&id=${uploaded.data.id}`,
          ...uploaded.data
        }));

      } catch (err) {
        console.error("Upload failed:", err);
        reject(NextResponse.json({ error: "Upload error" }, { status: 500 }));
      }
    });

    busboy.on("error", (err: Error) => {
      console.error("Busboy error:", err);
      reject(NextResponse.json({ error: "Busboy error" }, { status: 500 }));
    });

    const nodeStream = streamFromWebReadable(req.body!);
    nodeStream.pipe(busboy);
  });
}
