import './App.css';
import { useState, useEffect } from 'react';
import BobsEpisodeList from './Lists/BobsEpisodeList';
import FoodList from './Lists/FoodList';
import HolidayList from './Lists/HolidayList';
import PetList from './Lists/PetList';


function App() {
  const [bobEpisode, setBobEpisode] = useState([]);
  const [foods, setFoods] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [myPets, setMyPets] = useState([]);

  return (
    <div className="App">
      <h2>List of Bob&apos;s Burgers Holiday Episodes</h2>
      <BobsEpisodeList bobEpisode={bobEpisode} />
      
      <h2>List of Amazing Foods</h2>
      <h2>List of Holidays</h2>
      <h2>Rankings of My Pets</h2>
    </div>
  );
}

export default App;
