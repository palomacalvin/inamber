// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css';



export default function IntroTrackPage() {
  return (


    <div className={styles.basicpage_background_blue}>

        <iframe
          width="100%"
          height="500"
          src="https://youtu.be/0iPv9sL2sMk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <p>
          The undeniable.<br></br>
          You're made of everything.<br></br>
          You've left your mark just by concentrating and dissolving.<br></br>
          By expanding and contracting <br></br>
          Consuming and propagating.<br></br>
          Time will hold you.<br></br>
          It already does.<br></br>
          You can let yourself be carried --<br></br>
          You'll be carried anyway.<br></br>
          The inevitable<br></br>
          It's already here. <br></br>
        </p>

    </div>
  );
};
