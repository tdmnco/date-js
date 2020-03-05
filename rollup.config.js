// Imports:
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

// Exports:
export default {
  input: 'src/js/model-localstorage.js',
  output: {
    compact: true,
    file: 'dist/js/model-localstorage.js',
    format: 'cjs',
    name: 'ModelLocalStorage'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}