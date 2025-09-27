// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import photopage from "../../styles/dwad_photopage.module.css";


export default function IntroTrackPage() {
  return (
    <div className={photopage.photopage_repeat_dwad}>
      <p style={{ fontFamily: "blzee", fontSize: "5rem", color: "darkcyan", fontWeight: "bold"}}>I want to believe<br></br>
      We&rsquo;re all the same<br></br>
      That we go to the same place when<br></br>
      We all close our eyes<br></br>
      And make lovely colors dance<br></br>
      Hand in hand<br></br>
      Will I see you there?<br></br>
      On the shore of placid waters<br></br>
      With gentle stars above and<br></br>
      Soft sands below<br></br>
      And will I hear you?<br></br>
      Wings and feet and whispers and stings<br></br>
      Do we all dream?<br></br>
      Will we all be there?<br></br></p>

      <img src="tracks/do_we_all_dream_content_001.png" alt="bedbugs" style={{ display: "flex", margin: "0 auto", paddingBottom: "3rem", maxWidth: "800px"}}></img>

      <img src="tracks/do_we_all_dream_content_002.png" alt="bedbugs" style={{ display: "flex", margin: "0 auto", paddingBottom: "3rem", maxWidth: "800px"}}></img>

      {/* <iframe
          width="100%"
          height="500"
          src="https://youtu.be/r_XI_ZNGn_w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/r_XI_ZNGn_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </div>
  );
}
