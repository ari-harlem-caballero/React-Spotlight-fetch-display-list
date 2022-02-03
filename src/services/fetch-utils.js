import { checkError, client } from './client';

export async function getBobsEpisodes() {
  const response = await client
    .from('bob')
    .select();
    
  return checkError(response);
}