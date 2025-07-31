"use client";
import React, { useRef, useState, useEffect } from "react";

export default function CollectionsPage() {
  console.log("CollectionsPage rendered");

  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then(setImages)
      .catch(console.error);
  }, []);

  const handleFileChange = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      console.warn("No file selected");
      return;
    }

    console.log("Uploading file:", file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    console.error("Failed to parse server response:", text);
    return;
  }

  console.log("Upload response:", data);

  if (data.success) {
    const imagesRes = await fetch("/api/images");
    const imagesData = await imagesRes.json();
    setImages(imagesData);
  } else {
    console.error("Upload failed:", data.error);
  }
} catch (err) {
  console.error("Upload error:", err);
}
  }

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h1>Intro</h1>

      <button type="button" onClick={openFileDialog} style={{color: "white"}}>
        Upload Image
      </button>

      <input
        ref={fileInputRef}
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div className="image-gallery" style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Uploaded ${i}`}
            style={{ maxWidth: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );

}

