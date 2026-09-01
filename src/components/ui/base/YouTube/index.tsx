import styles from './styles.module.css';
import type { YouTubeProps } from './types';

export default function YouTube({ title, videoId }: YouTubeProps) {
  return (
    <iframe
      className={styles.youTube}
      title={title}
      height="480"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer;clipboard-write;encrypted-media;picture-in-picture"
      allowFullScreen
    />
  );
}
