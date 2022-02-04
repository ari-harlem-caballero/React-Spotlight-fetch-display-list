import './App.css';
import { useState, useEffect } from 'react';
import { getBobsEpisodes, getFoodList, getHolidays } from './services/fetch-utils';
import BobsEpisodeList from './Lists/BobsEpisodeList';
import FoodList from './Lists/FoodList';
import HolidayList from './Lists/HolidayList';
import PetList from './Lists/PetList';


function App() {
  const [bobEpisode, setBobEpisode] = useState([]);
  const [foods, setFoods] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [myPets, setMyPets] = useState([]);

  async function fetchBobsEpisodes() {
    const data = await getBobsEpisodes();

    setBobEpisode(data);
  }

  async function fetchFoodList() {
    const data = await getFoodList();

    setFoods(data);
  }

  async function fetchHolidays() {
    const data = await getHolidays();

    setHolidays(data);
  }

  useEffect(() => {
    fetchBobsEpisodes();
    fetchFoodList();
    fetchHolidays();
  }, []);

  return (
    <div className="App">
      <h2>List of Bob&apos;s Burgers Holiday Episodes</h2>
      <BobsEpisodeList bobEpisode={bobEpisode} />
      
      <h2>List of Amazing Foods</h2>
      <FoodList foods={foods} />

      <h2>List of Holidays</h2>
      <HolidayList holidays={holidays} />
      
      <h2>Rankings of My Pets</h2>
    </div>
  );
}

export default App;
