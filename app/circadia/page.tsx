// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module

const text = `Forward
      Forward
      How uncertain we are as we build from the base
      When the top is only to be imagined.
      The pyramid's point is for the solitary few,
      the ones who climb,
      forgetting the laying of the bricks by many hands
      and planting of seeds by many spades,
      and the first breaths of the groundbreaker.
      What we build we build together,
      all of us live through all the weather.
      We were here long before you, in many forms,
      we know the rhythms, we know the scorn.
      What we build, we build together.
      All of us live through all the weather.

      `;

export default function IntroTrackPage() {
  return (
    <div className={styles.basicpage_background}>
      <div style={{ textAlign: "center"}}>
      </div>
      <img src="/tracks/circadia-pg-001.png">
      </img>

      <p>TODO: ADD CAVALRY ANIMATION HERE.</p>

        {text.split("\n").map((line, index) => (
          <span
            key={index}
            style={{
              fontSize: "6rem",  // Make Line 2 larger
              color: index === 9 ? "darkblue" : "black",   // Make Line 2 red
              display: "block",  // Each line on a new line
              fontFamily: "blzee"
            }}
          >
            {line}
          </span>
        ))}
    </div>
  );
}
