// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module
import photopage from "../../styles/bugempathy_photopage.module.css"

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

const text2 = `I see how you treat the others,
you're careful and playful and humble,
you share food you share space,
you fumble, you accept disgrace,
and here i am, confined to be separate,
made to be a villain, made to be desperate,
i only sting what i don't understand,
i only bite when i'm crushed in your hand.
but you have to believe that you need me.
i'm patient.

`

export default function IntroTrackPage() {
  return (
    <div className={photopage.photopage_stretch_bug}>
      <div style={{ textAlign: "center"}}>
      </div>
        {text.split("\n").map((line, index) => (
          <span
            key={index}
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: [6, 9].includes(index) ? "darkblue" : "blue",
              display: "block",  // Each line on a new line
              fontFamily: index === 9? "Letter-Set-A": "Letter-Set-B"
            }}
          >
            {line}
          </span>

        ))}

        <div style={{ margin: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe width="700" height="394" src="https://www.youtube.com/embed/yOtL3O97arU?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>

        {text2.split("\n").map((line, index) => (
          <span
            key={index}
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: [6, 9].includes(index) ? "darkblue" : "blue",
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
