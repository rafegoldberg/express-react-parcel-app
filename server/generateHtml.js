const Path = require('path');
const Bundler = require('parcel-bundler');

const entry = Path.join(__dirname, '..', 'src/index.html');
const bundler = new Bundler(entry);

console.log(bundler.middleware());

// // Generate the HTML using index.html as a template

// import fs from 'fs';
// import path from 'path';
// import cheerio from 'cheerio';
// import { Helmet } from 'react-helmet';

// // The path is relative from server bundle to client bundle, not the source
// const templatePath = path.join(__dirname, '..', 'client', 'index.html');
// const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

// export default function generateHtml(markup) {
//   // Get the server-rendering values for the <head />
//   const helmet = Helmet.renderStatic();

//   const $template = cheerio.load(HTML_TEMPLATE);
//   $template('head').append(helmet.title.toString() + helmet.meta.toString() + helmet.link.toString());
//   $template('#app').html(markup);

//   return $template.html();
// }