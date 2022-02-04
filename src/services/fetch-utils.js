import { checkError, client } from './client';

export async function getBobsEpisodes() {
  const response = await client
    .from('bob')
    .select();
    
  return checkError(response);
}

export async function getFoodList() {
  const response = await client
    .from('food')
    .select();

  return checkError(response);
}

export async function getHolidays() {
  const response = await client
    .from('holiday')
    .select();
  
  return checkError(response);
}

export async function getPets() {
  const response = await client
    .from('pet')
    .select();

  return checkError(response);
}