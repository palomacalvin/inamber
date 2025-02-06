// components/TrackCard.tsx
import Link from "next/link";

interface TrackCardProps {
  src: string;
  link: string;
  title: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ src, link, title }) => {
  return (
    <div className="track-card">
      <Link href={link}>
        <h2>{title}</h2>
        <img src={`/tracks/${src}`} alt={title} className="track-image" />
      </Link>
    </div>
  );
};

export default TrackCard;
