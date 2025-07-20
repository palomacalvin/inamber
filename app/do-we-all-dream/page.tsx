// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams

export default function IntroTrackPage() {
  return (
    <div className="track-page">
      <h1>Do We All Dream</h1>
      <p>This is the page for Do We All Dream</p>
      <img
        src="/tracks/circadia.jpg"
        alt="Track 11: Do We All Dream"
        className="track-image"
      />
    </div>
  );
}
