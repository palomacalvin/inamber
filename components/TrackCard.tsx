// components/TrackCard.tsx
"use client"; // Mark this file as a client-side component

import Link from "next/link";
import styles from '../styles/TrackCard.module.css'; // Import your CSS Module

interface TrackCardProps {
  src: string;
  link: string;
  title: string;
  index: number;
}

const TrackCard: React.FC<TrackCardProps> = ({ src, link, title, index }) => {
  const rotationDirection = index % 2 === 0 ? 'clockwise': 'counterclockwise';

  return (
    <div className={styles.trackCardContainer}>
      <Link href={link}>
        <h2 className={styles.track_background}>{title}</h2>d
        <img
          src={`/tracks/${src}`}
          alt={title}
          className={`${styles.track_image} ${styles[rotationDirection]}`} // Dynamically apply rotation class
        />
      </Link>
    </div>
  );
};

export default TrackCard;
