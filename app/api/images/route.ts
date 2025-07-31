import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import React from "react";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64!, "base64").toString("utf-8")
  ),
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

function bufferToStream(buffer: Buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export async function GET() {
  if (!FOLDER_ID) {
    return NextResponse.json({ error: "Missing folder ID" }, { status: 500 });
  }

  try {
    const res = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: "files(id, name)",
    });

    const imageUrls = res.data.files?.map(file => 
      `https://drive.google.com/uc?export=view&id=${file.id}`
    ) ?? [];

    return NextResponse.json(imageUrls);
  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!FOLDER_ID) {
    return NextResponse.json({ error: "Missing folder ID" }, { status: 500 });
  }

  const contentType = req.headers.get("content-type") || "";
  // if (!contentType.includes("multipart/form-data")) {
  //   return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
  // }

  console.log("Content-Type header:", req.headers.get("content-type"));


  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = bufferToStream(buffer);

    const uploadRes = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [FOLDER_ID],
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
      fields: "id",
    });

    console.log("Upload success:", uploadRes.data.id);

    return NextResponse.json({ success: true, fileId: uploadRes.data.id });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
