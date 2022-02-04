import React from 'react';

export default function PetList({ myPets }) {
  return <section className='pet-list'>
    {
      myPets.map(({
        name,
        type,
        color,
        rank
      }, i) => <div key={name + i} className='single-pet'>
        <h3>{name}</h3>
        <p>{rank} /5</p>
        <p>Type: {color} {type}</p>
      </div>)
    }
  </section>;
}
