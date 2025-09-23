// // app/api/upload/route.ts
// import { google } from "googleapis";
// import { NextRequest, NextResponse } from "next/server";
// import Busboy from "busboy";
// import { Readable } from "stream";

// // Convert Web ReadableStream to Node.js Readable stream
// function streamFromWebReadable(webStream: ReadableStream<Uint8Array>): Readable {
//   const reader = webStream.getReader();
//   return new Readable({
//     async read() {
//       const { done, value } = await reader.read();
//       if (done) {
//         this.push(null);
//       } else {
//         this.push(value);
//       }
//     },
//   });
// }

// export async function POST(req: NextRequest) {
//   const keyBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
//   const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

//   if (!keyBase64 || !FOLDER_ID) {
//     return NextResponse.json({ error: "Missing credentials or folder ID" }, { status: 500 });
//   }

//   const credentials = JSON.parse(Buffer.from(keyBase64, "base64").toString("utf-8"));
//   const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: ["https://www.googleapis.com/auth/drive"],
//   });
//   const drive = google.drive({ version: "v3", auth });

//   const stream = streamFromWebReadable(req.body!);

//   return await handleUpload(stream, req.headers, drive, FOLDER_ID);
// }

// async function handleUpload(stream: Readable, headers: Headers, drive: any, folderId: string) {
//   return new Promise<NextResponse>(async (resolve, reject) => {
//     const busboy = Busboy({ headers: Object.fromEntries(headers) });

//     let resolved = false;

//     busboy.on("file", async (_fieldname, file, info) => {
//       const { filename, mimeType } = info;
//       try {
//         const uploaded = await drive.files.create({
//           requestBody: {
//             name: filename,
//             parents: [folderId],
//           },
//           media: {
//             mimeType,
//             body: file,
//           },
//           fields: "id, name, webViewLink, webContentLink",
//           supportsAllDrives: true, 
//         });

//         await drive.permissions.create({
//           fileId: uploaded.data.id!,
//           requestBody: {
//             role: "reader",
//             type: "anyone",
//           },
//           supportsAllDrives: true, 
//         });

//         const imageUrl = `https://drive.google.com/uc?export=view&id=${uploaded.data.id}`;
//         if (!resolved) {
//           resolved = true;
//           resolve(
//             NextResponse.json({
//               success: true,
//               imageUrl,
//               ...uploaded.data,
//             })
//           );
//         }
//       } catch (err) {
//         console.error("Upload failed:", err);
//         if (!resolved) {
//           resolved = true;
//           resolve(NextResponse.json({ error: "Upload failed" }, { status: 500 }));
//         }
//       }
//     });

//     busboy.on("error", (err) => {
//       console.error("Busboy error:", err);
//       if (!resolved) {
//         resolved = true;
//         resolve(NextResponse.json({ error: "Upload stream error" }, { status: 500 }));
//       }
//     });

//     busboy.on("finish", () => {
//       if (!resolved) {
//         resolved = true;
//         resolve(NextResponse.json({ error: "No file received" }, { status: 400 }));
//       }
//     });

//     stream.pipe(busboy);
//   });
// }



// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Helper to upload a Buffer using Cloudinary's upload_stream
function uploadBufferToCloudinary(buffer: Buffer): Promise<any> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file || typeof file === "string") {
    console.error("Invalid file:", file);
    return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await (file as Blob).arrayBuffer());

  const result = await uploadBufferToCloudinary(buffer);

  return NextResponse.json({ success: true, secure_url: result.secure_url });

}
