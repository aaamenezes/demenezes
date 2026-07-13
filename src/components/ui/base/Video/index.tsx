import React from 'react';

export default function Video({ url, alt }: { url: string; alt: string }) {
  return (
    <video src={url} controls>
      <p>{alt}</p>
    </video>
  );
}
