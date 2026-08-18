import style from './styles.module.css';

export default function YouTube({
  title,
  videoId,
}: {
  title: string;
  videoId: string;
}) {
  return (
    <iframe
      className={style.youTube}
      title={title}
      height="480"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer;clipboard-write;encrypted-media;picture-in-picture"
      allowFullScreen
    />
  );
}
