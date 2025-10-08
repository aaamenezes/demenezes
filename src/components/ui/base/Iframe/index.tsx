import style from './styles.module.css';

export default function Iframe({
  title,
  videoID,
}: {
  title: string;
  videoID: string;
}) {
  return (
    <iframe
      className={style.iframe}
      title={title}
      height="480"
      src={`https://www.youtube.com/embed/${videoID}`}
      allow="accelerometer;clipboard-write;encrypted-media;picture-in-picture"
      allowFullScreen
    />
  );
}
