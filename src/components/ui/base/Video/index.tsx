import React from 'react';
import S from './styles.module.css';

export default function Video({ url, alt }: { url: string; alt: string }) {
  return (
    <video className={S.video} src={url} controls>
      <p>{alt}</p>
    </video>
  );
}
