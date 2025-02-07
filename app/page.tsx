// app/page.tsx
import TrackCard from '../components/TrackCard';

const tracks = [
  { src: 'intro.jpg', link: '/intro', title: 'Intro', },
  { src: 'in-amber.jpg', link: '/in-amber', title: 'In Amber', },
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
    <div className="home-container">
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