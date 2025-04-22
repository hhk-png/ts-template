import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index.ts'],
  outDir: 'dist',
  failOnWarn: false,
  declaration: true,
  rollup: {
    emitCJS: false,
  },
})
