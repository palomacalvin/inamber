// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams

export default function IntroTrackPage() {
  return (
    <div className="track-page">
      <h1>Intro</h1>
      <p>
        This is the outro.
      </p>
      <img
        src="/tracks/intro.jpg"
        alt="Track 1: Intro"
        className="track-image"
      />
    </div>
  );
}
