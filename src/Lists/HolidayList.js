import React from 'react';

export default function HolidayList({ holidays }) {
  return <section className='holiday-list'>
    {
      holidays.map(({
        name,
        season,
        days,
        gifts
      }, i) => <div key={name + i} className='holiday'>
        <h3>{name}</h3>
        <p>{gifts ? '🎁' : ''}</p>
        <p>{season} -- lasts {days} days</p>
      </div>)
    }
  </section>;
}
