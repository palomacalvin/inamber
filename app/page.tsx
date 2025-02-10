// app/page.tsx
import TrackCard from '../components/TrackCard';
import Link from "next/link";
import styles from "../styles/Home.module.css"


const tracks = [
  { src: 'intro.png', link: '/intro', title: 'Intro', },
  { src: 'in-amber.png', link: '/in-amber', title: 'In Amber', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },
  { src: 'circadia.jpg', link: '/circadia', title: 'Circadia', },

  // Add more tracks as needed
];

export default function Home() {
  return (
    <div className={styles.home_background}>
      <Link href="/">
          <header className={styles.home_header}>
            <h1>In Amber</h1>
          </header>
        </Link>
      {tracks.map((track, index) => (
        <TrackCard
          key={index}
          src={track.src}
          link={track.link}
          title={track.title}
        />
      ))}
    </div>
  );
}