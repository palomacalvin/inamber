"use client";
import React, { useRef, useState, useEffect } from "react";

export default function CollectionsPage() {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch the image URLs from our API on mount
  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setImages(data);
      })
      .catch(console.error);
  }, []);

  // Handle file upload
  const handleFileChange = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      console.warn("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setImages((prev) => [data.secure_url, ...prev]); // add new image to list
      } else {
        console.error("Upload failed:", data.error);
      }
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div style={{ backgroundImage: "linear-gradient(blue, black)" }}>
      <h1 style={{ fontSize: "3rem", fontFamily: "Letter-Set-A", textAlign: "center" }}>Museum Arthropoda</h1>

      <button type="button" onClick={openFileDialog} 
        className="basic_button">
        Upload Image
      </button>

      <input
        ref={fileInputRef}
        type="file"
        name="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <p style={{ textAlign: "center", fontFamily: "sans-serif"}}>By uploading, you acknowledge that your image will become part of the digital
        Arthropod Museum. Please only upload images that are your own, or images that you have
        permission to upload from the image&rsquo;s owner. 
        Share your arthropod finds with the world and let them live on in digital memory
        for as long as all our wires are connected.
      </p>

      <div
        className="image-gallery"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", marginTop: "20px", justifyContent: "center", gap: "16px" }}
      >
        {images.map((url, i) => (
          <img
            key={i}
            src={url.replace('/upload/', '/upload/f_auto/')}
            alt={`Uploaded ${i}`}
            style={{ width: "100%", height: "300px", objectFit: "cover", margin: "10px", padding: "2px", borderRadius: "20px" }}
          />
        ))}
      </div>
    </div>
  );
}
