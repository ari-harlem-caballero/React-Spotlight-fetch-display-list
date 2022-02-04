import React from 'react';

export default function BobsEpisodeList({ bobEpisode }) {
  return <section className='episode-list'>
    {
      bobEpisode.map(({
        title,
        holiday,
        episode,
        description
      }, i) => <div key={title + i} className='episode'>
        <h3>{title}</h3>
        <p className='info'>{holiday}, {episode}</p>
        <p className='description'>{description}</p>
      </div>)
    }
  </section>;
}
