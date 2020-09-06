const Path = require('path');
const Bundler = require('parcel-bundler');
const e = require('express');
const app = require('express')();

// CORS
//
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// ROUTES
//
app.get('/api', (req, res) =>
  res.json({
    APIK: `JM3Z2DPZXD1CDI0AGY5OHVOM`,
    FULL: req.protocol + '://' + req.get('host') + req.originalUrl,
    NAME: 'Rafe Goldberg'
  })
);

// BUNDLE
//
const entry = Path.join(__dirname, '..', 'src/index.html');
console.log(entry)
const bundler = new Bundler(entry);
app.use('/', bundler.middleware());

// START
// 
app.listen(8080, function () {
  console.log(`Listening on ${8080}`);
});
