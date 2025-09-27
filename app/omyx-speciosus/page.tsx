// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module

const text = `Speciate, but we’re cut from the same cloth
      The mammal’s tender flesh, the scale of the moth
      Whispers through fur and sun into skin
      Salt in the sea and calcareous casts within
      All of our symmetry and cracks, built from the same blocks,
      The mammal’s tender flesh, the scale of the moth

      `;

export default function IntroTrackPage() {
  return (
    <div className={styles.basicpage_background}>
      <div style={{ textAlign: "center"}}>
      </div>
        {text.split("\n").map((line, index) => (
          <span
            key={index}
            style={{
              fontSize: index === 10 ? "4rem" : "2rem",  // Make Line 2 larger
              color: index === 9 ? "darkblue" : "black",   // Make Line 2 red
              display: "block",  // Each line on a new line
              fontFamily: index === 9? "Letter-Set-A": "Letter-Set-B"
            }}
          >
            {line}
          </span>
        ))}
        {/* <iframe
          src="/cables/omyx_speciosus/index.html" // Path to the HTML file inside public folder
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="Omyx speciosus HTML"
        /> */}

        {/* <iframe
          width="100%"
          height="500"
          src="https://youtu.be/B6uLfBvSNLk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/B6uLfBvSNLk?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>


    </div>


  );
}
