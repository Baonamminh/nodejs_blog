const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/learn', coursesRouter);

  app.use('/search', siteRouter);

  app.use('/', siteRouter);

  app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
  });
}

module.exports = route;
