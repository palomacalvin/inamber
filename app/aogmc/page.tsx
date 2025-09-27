// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import styles from '../../styles/Basic_page.module.css'; // Import CSS Module

export default function IntroTrackPage() {
  return (
    <div className={styles.basicpage_background}>
      <h1 style={{ fontFamily: "berryrotunda", fontSize: "4rem" }}>The 17 Year War</h1>
      <div style={{ fontFamily: "berryrotunda" }}>AS WRITTEN IN THE AMBER 
        <br></br>
        <br></br>
        {`As engraved in the Amber Decrees of the Cicadids,
        our ancestors, the ancient Cicadids, lived in peace and harmony.
        For centuries, our ancestors prospered, and our voices were heard across
        the lands. Life was abundant and glorious, and all the Cicadids lived
        with great honor and prosperity.`}
        <br></br>
        {`Our peace was unstable, however, and as time progressed, a great beast
        grew to plague Cicadidae. There was one — a giant — who wished to 
        rule us all, in cruelty and fear. It was`}
        <br></br>
        <br></br> 

        <span style={{ fontSize: "5rem", color: "darkblue" }}>GREAT AYUTHIA THE GHOST</span>

        <br></br>

        {`A creature determined to torment, Ayuthia grew to be 10 times as imposing as
        the rest of the Cicadids. Its voice created a sound so strong that the Earth shook
        for miles beneath Ayuthia. Any creature in its path would be eliminated.`}

        <br></br>
        <br></br>

        <p><img src="tracks/aogmc-pg-001.png" alt="Artist rendition of Great Ayuthia the Ghost" style={{ display: "inline-block", maxHeight: "500px" }}></img></p>
        <span style={{ fontSize: "1rem" }}>Artist rendition of Great Ayuthia the Ghost</span>

        <br></br>
        <br></br>

        {`Ayuthia chose to rise to power amongst the Cicadids, overthrowing the benevolent and just
        Council of Amber. And though Ayuthia's reign was long and full of terror, its downfall
        was rejoiced across the land.`}
        
        <br></br>
        <br></br>
        
        {`For 17 years, Ayuthia's voice shook the Earth. Young Cicadids lived and perished under
        the spell of Ayuthia's voice. Living longer than any other Cicadid, apathy grew amongst
        the youthful Cicadas, who grew used to life under Ayuthia's power. 13 years after Ayuthia's
        reign began, three young Cicadids formed`}

        <br></br> 
        <br></br> 

        <span style={{ fontSize: "5rem", color: "darkblue" }}>THE COALITION OF AMBER</span>

        <br></br>

        {`and vowed to stop Ayuthia. Over the agonizing course of four years, the Coalition 
        grew, and each day the young Cicadids gathered their voices, in an effort to drown
        out Ayuthia's. And after four agonizing years, they did.

        Ayuthia was vanquished in an instant, its old husk crumbling under the weight 
        of thousands — perhaps millions — of Cicadids, together, in a sweltering, 
        unburdened, fearless song of freedom. 

        With Ayuthia having perished, the Cicadids once again returned to peace. Cicadidae has
        lived through centuries of change, and through each new era, the Cicadids raise 
        their voices every 17 years in remembrance of Ayuthia and the common peril.`}

        <br></br>
        
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/YMACWCf9prU?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        </div>
    </div>
  );
}
