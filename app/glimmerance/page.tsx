// app/tracks/intro/page.tsx
"use client"; // Mark this as a client-side component if you use hooks like useParams
import Fireflies from "@/components/Fireflies";
import { useEffect } from "react";

export default function IntroTrackPage() {
  useEffect(() => {
    document.body.classList.add("body-glimmerance");

    return () => {
      document.body.classList.remove("body-glimmerance");
    };
  }, []);


  return (
    <>
      <Fireflies />
      
      <br></br>
      <br></br>

      <div style={{ fontFamily: "blzee", color: "#fdfff6", fontSize: "3rem", width: "200px", marginLeft: "50px" }}>
        {`There is a light i know.
        Somewhere there's a light, i know.
        And i know some lights,
        yeah they're friends of mine,
        And i have light in me,
        yeah it's a friend of mine,
        I don't need to worry about the dark,
        Or what's in front or behind,
        Or how much time i've got until the end of mine.
        Somewhere there's a light, i know.
        And i know some lights,
        yeah they're friends of mine.
        And i have a little light in me,
        And i have the time.`}
      </div>

      {"\n"}


        {/* <iframe
          width="100%"
          height="500"
          src="https://youtu.be/Y4YfCmSNMTo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/Y4YfCmSNMTo?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>


      {"\n"}

      <img src="tracks/glimmerance_content_001.png" alt="fireflies" style={{ paddingTop: "2rem" }}></img>

    </>
  );
}
