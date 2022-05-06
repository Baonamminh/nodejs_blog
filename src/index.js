const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

const { engine } = require('express-handlebars');
const path = require('path');

const SortMiddleware = require('./middlewares/SortMiddleware');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to public folder
app.use(express.static(path.join(__dirname, 'public')));

//connect to db
db.connect();

//middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(SortMiddleware);

// HTTP logger morgan
app.use(morgan('combined'));

// methodOverride
app.use(methodOverride('_method'));

// Template engines
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: require('./helpers/handlebars'),
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
