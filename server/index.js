// const Path = require('path');
// const Bundler = require('parcel-bundler');
const app = require('express')();

// CORS
//
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// BUNDLE
//
// const entry = Path.join(__dirname, '../src/index.html');
// const bundler = new Bundler(entry, {});
// app.use(bundler.middleware());

// ROUTES
//
app.get('/api', (req, res) =>
  res.json({
    XSSE: process.env.CODESANDBOX_SSE,
    PORT: 8080,
    APIK: process.env.API_KEY,
    FULL: req.protocol + '://' + req.get('host') + req.originalUrl,
    NAME: 'Rafe Goldberg'
  })
);

// START
app.listen(8080, function () {
  console.log(`Listening on ${8080}`);
});
