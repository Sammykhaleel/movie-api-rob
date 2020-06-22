const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

let movies = [
  {
    movieName: 'Vanilla Sky',
  },
  {
    movieName: 'Sunshine',
  },
  {
    movieName: 'Avengers: End Game',
  },
  {
    movieName: 'Eternal Sunshine of the Spotless Mind',
  },
  {
    movieName: 'The Life Aquatic with Steve Zissou',
  },
];

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to flixOlogy!');
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/info', (req, res) => {
  res.send('Succesful GET request returning detailed information of movie');
});

app.get('/movies/info/genre', (req, res) => {
  res.send('Succesful GET request returning genre of move');
});

app.get('/castCrew/director/:name', (req, res) => {
  res.send(
    'Succesful GET request returning detailed information of specified director of specified movie'
  );
});

app.post('/users', (req, res) => {
  res.send('Succesful POST request registering new user');
});

app.put('/users/:name', (req, res) => {
  res.send('Succesful PUT request updating existing users information');
});

app.put('/users/:name/favorites', (req, res) => {
  res.send(
    'Succesful PUT request saving a specified movie into favorites list'
  );
});

app.delete('/users/:name/favorites', (req, res) => {
  res.send(
    'Succesful DELETE request deleting a specified movie from favorites list'
  );
});

app.delete('/users/:name', (req, res) => {
  res.send('Succesful DELETE request deleting a specified users account');
});

app.get('/castCrew/:name', (req, res) => {
  res.send('Succesful GET request returning actors name with resume');
});

app.get('/movies/info/:actors', (req, res) => {
  res.send(
    'Succesful GET request returning actors that starred in specified movie'
  );
});

app.put('/users/:name/favorites/watchList', (req, res) => {
  res.send(
    'Succesful PUT request adding a "To Watch" list to "Favorites" list'
  );
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('You broke it!!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
