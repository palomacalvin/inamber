// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module

const text = `I love you and I’m made of you
      And you are made of me
      Why are you afraid of what you are?
      Aren’t we all the same?
      Really, mostly,
      In function,
      Component,
      Figment,
      And expiration.
      The only difference is,
      In Amber
      I keep my skin.

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
              color: index === 10 ? "darkblue" : "black",   // Make Line 2 red
              display: "block",  // Each line on a new line
              fontFamily: index === 10? "Letter-Set-A": "Letter-Set-B"
            }}
          >
            {line}
          </span>
        ))}
    </div>
  );
}
