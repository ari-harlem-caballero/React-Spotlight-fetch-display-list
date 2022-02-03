import React from 'react';

export default function BobsEpisodeList({ bobEpisode }) {
  return <section>
    {
      bobEpisode.map(({
        title,
        holiday,
        episode,
        description
      }, i) => <div key={title + i}>
        <h5>{title}</h5>
        <p>{episode}</p>
        <p>{holiday}</p>
        <p>{description}</p>
      </div>)
    }
  </section>;
}
