const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  app.get('/news', newsRouter);

  app.get('/search', siteRouter);

  app.get('/', siteRouter);

  app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
  });
}

module.exports = route;
