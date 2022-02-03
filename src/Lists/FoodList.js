import React from 'react';

export default function FoodList({ foods }) {
  return <section className='food-list'>
    {
      foods.map(({
        name,
        type,
        prep_time,
        serve_hot
      }, i) => <div key={name + i} className='food-item'>
        <h3>{name}</h3>
        <p>{serve_hot ? '🔥' : '🧊'}</p>
        <p>Type: {type}</p>
        <p>Prep Time: {prep_time} mins</p>
      </div>)
    }
  </section>;
}
