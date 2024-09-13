import { resolve } from 'path';
import process from 'process';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'production',
  entry: './demo.js',
  output: {
    filename: 'bundle.js',
    path: resolve(process.cwd(), './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo.html',
    }),
  ],
};
