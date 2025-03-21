/** @type {import('./$types').EntryGenerator} */
export function entries() {
const files = import.meta.glob('/src/data/equipment/*.yaml', { query: '?raw', import: 'default' });
const validSlugs = new Set(
  Object.keys(files).map((path) => path.split('/').pop().replace('.yaml', ''))
);

return Array.from(validSlugs).map((slug) => ({slug: slug}));
}

export const prerender = true;