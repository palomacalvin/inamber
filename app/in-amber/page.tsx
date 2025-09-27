// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from "../../styles/inamber_photopage.module.css"


const text = `Transposed
      In sediment
      Embraced in blood of trees and flowers
      The sweet arms of forever
      Or, at least, a long time
      How lovely is it to eclipse in a tomb of nectar
      And somehow, you find me 
      The collector
      I'll sit on a shelf,
      til I'm buried again
      As we all are,
      As is everything
      The burial and bloom
      From flight to amber and back again
      `;


const text2 = `What makes it last?
      What makes us last?
      Is it our skin, our soft parts?
      Is it our shells and armor?
      Is it the words we've spoken, 
      The sounds we've sung,
      The pages we wrote,
      The photos we've hung,
      Is it the paths and the buildings,
      The nests and the burrows,
      Is it the good and the great,
      and the pain and the hate,
      and everything in between?

      Does it matter if my parts are
      left behind when my cables get
      unplugged and the signals no longer fire?
      Will you remember me if my legs
      and arms are swimming in
      honeyed crystal longer than
      honey remains to be tasted?

      Will you remember me 
      will you remember me will you
      will you remember me 
      will you remember me will you
      will you remember me 
      will you remember me will you
      will you remember me 
      will you remember me will you
      will you remember me 
      will you remember me will you
      will you remember me 
      will you remember me will you

      `;



export default function IntroTrackPage() {
  return (


    <div className={styles.photopage_stretch_ia}>
      <div style={{ textAlign: "center"}}>
      </div>
      <img src='tracks/in-amber-pg_001.png'>
      </img>
        {text.split("\n").map((line, index) => (
          <span
            key={index}
            style={{
              fontSize: index === 10 ? "8rem" : "6rem",  // Make Line 2 larger
              color: /*index === 10 ?*/ "blue" /*: "black"*/,   // Make Line 2 red
              display: "block",  // Each line on a new line
              fontFamily: /*index === 10? "Letter-Set-A":*/ "tajamuka",
            }}
          >
            {line}
          </span>
        ))}


        {"\n"}


        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/aTUVvAmH3gM&list=PL9DkwE2ufI7IsrBHHCKe37207-IUeos59"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />


        {"\n"}

          <span
            style={{
              fontSize: "2rem",
              color: "aliceblue",
              display: "block",
              fontFamily: "tajamuka",
            }}
          >
            {text2}
          </span>

    </div>
  );
};
