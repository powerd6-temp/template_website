import { getViteConfig } from 'astro/config';
import { configDefaults, defineConfig } from 'vitest/config'


export default getViteConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      'tests/e2e/*',
    ]
    // Vitest configuration options
  },
});