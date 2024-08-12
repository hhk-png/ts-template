import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['./packages/**/__test__/*.test.ts'],
  },
})



