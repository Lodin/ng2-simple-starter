import Angular2App from 'angular-cli/lib/broccoli/angular2-app';
import Babel from 'broccoli-babel-plugin';
import Funnel from 'broccoli-funnel';
import MergeTrees from 'broccoli-merge-trees';
import Postcss from 'broccoli-postcss';
import Pug from 'broccoli-pug-plugin';
import * as Ng2AppConfig from './ng2-app.config';
import * as PostcssConfig from './postcss.config';

export default defaults => {
  const app = new Angular2App(defaults, Ng2AppConfig);

  const babel = new Babel(new Funnel(app, {exclude: ['vendor/**/*.js'], include: ['**/*.js']}));
  const postcss = new Postcss(new Funnel(app, {include: ['**/*.css']}), PostcssConfig);
  const pug = new Pug(new Funnel(app, {include: ['**/*.pug']}));
  const vendor = new Funnel(app, {include: ['vendor/**/*.js']});
  const index = new Funnel(app, {include: ['index.html']});
  const assets = new Funnel(app, {include: ['**/*.jpg', '**/*.svg']});

  return new MergeTrees([
    babel,
    postcss,
    pug,
    vendor,
    index,
    assets
  ], {overwrite: true});
}
