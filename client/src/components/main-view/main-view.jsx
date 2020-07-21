import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  // One of the "hooks" available in a React Component
  constructor() {
    super();

    this.state = {
      movies: null,
      selectedMovie: null,
      user: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://flixology.herokuapp.com/movies')
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get('YOUR_API_URL/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;

    if (!user)
      return [
        <RegistrationView onLoggedIn={(user) => this.onLoggedIn(user)} />,
        <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />,
      ];

    // Before the movies have been loaded
    if (!movies) return <div className='main-view' />;

    return (
      <Container>
        <div className='main-view'>
          {selectedMovie ? (
            <MovieView movie={selectedMovie} />
          ) : (
            movies.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
                onClick={(movie) => this.onMovieClick(movie)}
              />
            ))
          )}
        </div>
      </Container>
    );
  }
}
