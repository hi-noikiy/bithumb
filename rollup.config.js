import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.ts',
  output: {
    file: './built/index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    uglify()
  ]
};
