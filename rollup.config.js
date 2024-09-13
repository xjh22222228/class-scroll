import { terser } from 'rollup-plugin-terser';

export default {
  input: './index.mjs',
  output: {
    file: 'index.min.js',
    plugins: [terser()],
  },
  plugins: [],
};
