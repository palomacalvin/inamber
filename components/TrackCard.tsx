// components/TrackCard.tsx
import Link from "next/link";
import styles from '../styles/TrackCard.module.css'; // Import CSS Module


interface TrackCardProps {
  src: string;
  link: string;
  title: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ src, link, title }) => {
  return (
    <div >
      <Link href={link}>
        <h2 className={styles.track}></h2>
        <img src={`/tracks/${src}`} alt={title} className="track-image" />
      </Link>
    </div>
  );
};

export default TrackCard;
