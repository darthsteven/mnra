import {error} from '@sveltejs/kit'
import loadEquipment from '$lib/dataLoader.js';
  
export const load = async ({ params }) => {
  
  params.slug
  const allItems = await loadEquipment();

  return {item: allItems.find(item => item.slug === params.slug)};
}