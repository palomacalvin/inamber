// app/page.tsx
import TrackCard from '../components/TrackCard';
import Link from "next/link";
import styles from "../styles/Home.module.css"


const tracks = [
  { src: 'intro.png', link: '/intro', title: 'Intro', },
  { src: 'inamber-inamber-smaller.gif', link: '/in-amber', title: 'In Amber', },
  { src: 'circadia.png', link: '/circadia', title: 'Circadia', },
  { src: 'bug-empathy.png', link: '/bug-empathy', title: 'Bug Empathy', },
  { src: 'aogmc.png', link: '/aogmc', title: 'Attack of Giant Mutant Cicada', },
  { src: 'glimmerance.png', link: '/glimmerance', title: 'Glimmerance', },
  { src: 'spectra-approxima.png', link: '/spectra-approxima', title: 'Spectra Approxima', },
  { src: 'gossamer.png', link: '/gossamer', title: 'Gossamer', },
  { src: 'shutter-speed.png', link: '/shutter-speed', title: 'Shutter Speed', },
  { src: 'omyx-speciosus.png', link: '/omyx-speciosus', title: 'Omyx speciosus', },
  { src: 'undeniable-truths.png', link: '/undeniable-truths', title: 'Undeniable Truths', },
  { src: 'inamber-outro.png', link: '/outro', title: 'Outro', },
  { src: 'inamber-theory.png', link: '/next', title: 'Next', },
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