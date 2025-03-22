import {error} from '@sveltejs/kit'
import loadEquipment from '$lib/dataLoader.js';
  

export const load = async ({ params }) => {
  
  return {equipment: await loadEquipment()};

}