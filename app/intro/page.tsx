// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams

export default function IntroTrackPage() {
  return (
    <div className="track-page">
      <h1>Intro</h1>
      <p>
        This is the opening track of the album.
      </p>
      <img
        src="/tracks/intro.png"
        alt="Intro"
        className="track-image"
      />
    </div>
  );
}
