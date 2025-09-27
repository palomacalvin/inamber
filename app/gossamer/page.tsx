// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module


export default function IntroTrackPage() {
  return (
    <div className="track-page">
      <div className={styles.basicpage_background_blue}>
      <p>We must eat.</p>
      <p>We eat too.</p>
      <p>We eat just like you.</p>


      <div style={{justifyItems: "center", marginBottom: "2rem"}}>
      <img src='tracks/gossamer_img_001.png' alt="gossamer image 001"></img>
      </div>


      <div style={{justifyItems: "center", marginBottom: "2rem"}}>
      <img src='tracks/gossamer_img_002.png' alt="gossamer image 002"></img>
      </div>

      <div style={{justifyItems: "center", marginBottom: "2rem"}}>
      <img src='tracks/gossamer_img_003.png' alt="gossamer image 003"></img>
      </div>

      <div style={{justifyItems: "center", marginBottom: "2rem"}}>
      <img src='tracks/gossamer_img_004.png' alt="gossamer image 004"></img>
      </div>

      <div style={{ margin: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/4uwIFyw-k80?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      
      </div>
    </div>
  );
}
