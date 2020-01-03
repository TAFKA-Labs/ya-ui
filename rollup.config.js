import path from 'path'
import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'
const devDependencies = Object.keys(pkg.devDependencies)
const peerDependencies = Object.keys(pkg.dependencies)

export default {
  input: 'src/components/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: [...devDependencies, ...peerDependencies],
  plugins: [
    alias({
      entries: [
        {
          find: '@types',
          replacement: path.resolve(__dirname, 'src/types'),
        },
        {
          find: '@styling',
          replacement: path.resolve(__dirname, 'src/styling'),
        },
      ],
    }),
    resolve(),
    typescript(),
    commonjs(),
    terser(),
  ],
}
