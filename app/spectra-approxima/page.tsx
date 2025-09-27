// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module

export default function IntroTrackPage() {
  return (
    <div className={styles.basicpage_background_blue}>
      <p>
        I don&rsquo;t want you to know how much snow settled on my peaks before it even reached October
      </p>

      <p>I don&rsquo;t want you to know</p>

      <p>Before the air grew bitter, and I bitter with it</p>

      <p>I don&rsquo;t want you to know</p>

      <p>Now all that&rsquo;s left are the bitters.</p>

      <p>Tea leaves at the bottom of the cup.</p>

      <p>Stale, stagnant.</p>

      <p>And now I spend this eternity of breath waiting</p>

      <p>for the exhale of warmth,</p>

      <p>the steam that rises,</p>

      <p>holding steadfast to the sky above where I melt.</p>

      <p>

      {"\n"}


        {/* <iframe
          width="100%"
          height="500"
          src="https://youtu.be/0ps_Qc9fiYo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/0ps_Qc9fiYo?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>


      {"\n"}

      </p>

    </div>
  );
}
