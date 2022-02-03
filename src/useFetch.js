import React from 'react';
import { useState, useEffect } from 'react';
import { getBobsEpisodes } from './services/fetch-utils';

export function useFetch() {
  const [bobEpisode, setBobEpisode] = useState([]);
  const [foods, setFoods] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [myPets, setMyPets] = useState([]);

  async function fetchBobsEpisodes() {
    const data = await getBobsEpisodes();

    setBobEpisode(data);
  }

  useEffect(() => {
    fetchBobsEpisodes();
  }, []);

  return {
    bobEpisode, 
    setBobEpisode,
    foods, 
    setFoods,
    holidays, 
    setHolidays,
    myPets, 
    setMyPets,
  };
}
