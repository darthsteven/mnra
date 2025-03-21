// Preload valid slugs at build time
const files = import.meta.glob('/src/data/equipment/*.yaml', { query: '?raw', import: 'default' });
const validSlugs = new Set(
  Object.keys(files).map((path) => path.split('/').pop().replace('.yaml', ''))
);

// Synchronous match function
export function match(param) {
  return validSlugs.has(param);
}
