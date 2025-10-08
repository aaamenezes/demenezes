import React from 'react';
import style from './styles.module.css';

export default function Video({ url, alt }: { url: string; alt: string }) {
  return (
    <video className={style.video} src={url} controls>
      <p>{alt}</p>
    </video>
  );
}
