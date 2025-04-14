import {error} from '@sveltejs/kit'
import loadEquipment from '$lib/dataLoader.js';
  

export const load = async ({ params }) => {

  const equipment = await loadEquipment();
  // Get the full list of categories from the equipment.
  const categories = equipment.map(item => item.category);
  // Remove duplicates
  const uniqueCategories = [...new Set(categories)];

  // Now pop the equipment into the correct category.
  const categorizedEquipment = uniqueCategories.map(category => {
    return {
      category: category,
      items: equipment.filter(item => item.category === category)
    };
  });

 
  return {equipment: equipment, 
          categorizedEquipment: categorizedEquipment};

}