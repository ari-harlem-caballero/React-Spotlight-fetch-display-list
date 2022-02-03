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