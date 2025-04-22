import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'forks',
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      exclude: ['ui', ...coverageConfigDefaults.exclude],
    },
    include: ['./packages/**/test/*.test.ts'],
  },
})

// export default defineConfig({
//   test: {
//     pool: 'forks',
//     globals: true,
//     workspace: [
//       {
//         test: {
//           include: ['packages/**/test/*.test.ts'],
//           name: 'unit',
//           environment: 'node',
//         }
//       },
//       {
//         test: {
//           include: ['packages/**/test/*.test.ts'],
//           name: 'browser',
//           environment: 'happy-dom'
//         }
//       }
//     ]
//   }
// })
