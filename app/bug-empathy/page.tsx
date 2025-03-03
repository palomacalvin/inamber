// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module

const text = `Am I unpleasant?
        Am I useful?
        Do I bite you?
        Am I beautiful?
        Am I worthy?
        Am I graceful?
        Am I disgusting?
        Am I hateful?
        Do I make you shiver?
        Do I make you itch?
        Do I make you poor?
        Do I make you rich?
        Am I allowed to live with you?
        Am I allowed outside?
        Am I allowed in your bed?
        Am I dead on sight?

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
    </div>
  );
}
