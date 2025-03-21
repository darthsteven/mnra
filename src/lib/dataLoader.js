import yaml from 'js-yaml';

async function loadEquipment() {
  const files = import.meta.glob('/src/data/equipment/*.yaml', { query: '?raw', import: 'default' });
  const equipment = [];

  for (const path in files) {
    const content = await files[path]();
    const data = yaml.load(content);
    const slug = path.split('/').pop().replace('.yaml', ''); // Extract filename as slug
    equipment.push({ slug, ...data });
  }

  return equipment;
}

export default loadEquipment;

