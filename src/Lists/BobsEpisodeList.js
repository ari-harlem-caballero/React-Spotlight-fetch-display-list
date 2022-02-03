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
        <h3>{title}</h3>
        <p>{holiday}, {episode}</p>
        <p>{description}</p>
      </div>)
    }
  </section>;
}
