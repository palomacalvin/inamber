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
    <div className={styles.trackCardContainer}>
      <Link href={link}>
        <h2 className={styles.track_background}>{title}</h2> {/* Apply the track_background class to the title */}
        <img src={`/tracks/${src}`} alt={title} className={styles.track_image} />
      </Link>
    </div>
  );
};


export default TrackCard;
