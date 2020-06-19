const express = require('express'),
  morgan = require('morgan');

const app = express();

let favMovies = [
  {
    movieName: 'movie1',
  },
  {
    movieName: 'movie3',
  },
  {
    movieName: 'movie3',
  },
  {
    movieName: 'movie4',
  },
];

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to flixOlogy!');
});

app.get('/movies', (req, res) => {
  res.json(favMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('You broke it!!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
