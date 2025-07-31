"use client";

export default function TestUpload() {
  return (
    <div>
      <h1>Test Upload</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("🔥 Form submitted");
        }}
      >
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
