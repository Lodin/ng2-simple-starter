import Autoprefixer from 'autoprefixer';
import PostcssInlineSvg from 'postcss-inline-svg';

export const plugins = [
  {module: Autoprefixer},
  {module: PostcssInlineSvg, options: {
    path: 'src/assets/icons',
    encode: false
  }}
];
