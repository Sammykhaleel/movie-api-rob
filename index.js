const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const mongoose = require('mongoose');
const Models = require('./models.js');
const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/flixOlogyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to flixOlogy!');
});

app.get('/movies', function (req, res) {
  Movies.find().then((Movies) => res.json(Movies));
});

// app.get('/movies', (req, res) => {
//   res.json(movies);
// });

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
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + ' already exists');
      } else {
        Users.create({
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send('Error: ' + error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });
});

// app.post('/users', (req, res) => {
//   res.send('Succesful POST request registering new user');
// });

app.get('/users', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

app.get('/users/:username', (req, res) => {
  Users.findOne({ Username: req.params.Username })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

app.put('/users/:Username', (req, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
    {
      $set: {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday,
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});
// app.put('/users/:name', (req, res) => {
//   res.send('Succesful PUT request updating existing users information');
// });

app.post('/users/:Username/Movies/:MovieID', (req, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
    {
      $push: { FavoriteMovies: req.params.MovieID },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(er);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

// app.put('/users/:name/favorites', (req, res) => {
//   res.send(
//     'Succesful PUT request saving a specified movie into favorites list'
//   );
// });

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
