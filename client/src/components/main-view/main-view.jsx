import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setMovies } from '../../actions/actions';
import MoviesList from '../movies-list/movies-list';
import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { UpdateProfile } from '../update-profile/update-profile';

import '/index.scss';

class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    axios
      .get('https://flixology.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut(authData) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
    });
    window.open('/', '_self');
  }

  render() {
    let { movies } = this.props;
    let { user } = this.state;

    return (
      <Router basename='/client'>
        <Container>
          <div className='main-view'>
            <Navbar className='fixed-top' bg='dark' variant='dark'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link onClick={() => this.onLoggedOut()}>LogOut</Nav.Link>
                <Nav.Link as={Link} to='/user'>
                  Profile
                </Nav.Link>
              </Nav>
            </Navbar>
            <br></br>
            <br></br>
            <div className='main-view'>
              <Route
                exact
                path='/'
                render={() => {
                  if (!user)
                    return (
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    );
                  return <MoviesList movies={movies} />;
                }}
              />

              <Route path='/register' render={() => <RegistrationView />} />

              <Route
                path='/movies/:movieId'
                render={({ match }) => (
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                  />
                )}
              />

              <Route
                path='/movies/director/:name'
                render={({ match }) => {
                  if (!movies) return <div className='main-view' />;
                  return (
                    <DirectorView
                      director={
                        movies.find(
                          (m) => m.Director.Name === match.params.name
                        ).Director
                      }
                    />
                  );
                }}
              />

              <Route
                path='/movies/genres/:name'
                render={({ match }) => {
                  if (!movies) return <div className='main-view' />;
                  return (
                    <GenreView
                      genre={
                        movies.find((m) => m.Genre.Name === match.params.name)
                          .Genre
                      }
                    />
                  );
                }}
              />

              <Route
                exact
                path='/user'
                render={() => <ProfileView movies={movies} />}
              />
              <Route path='/user/update' render={() => <UpdateProfile />} />
            </div>
          </div>
        </Container>
      </Router>
    );
  }
}

let mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { setMovies })(MainView);

// import React from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import Container from 'react-bootstrap/Container';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { setMovies, setUser } from '../../actions/actions';
// import MoviesList from '../movies-list/movies-list';
// import { LoginView } from '../login-view/login-view';
// import { MovieView } from '../movie-view/movie-view';
// import { RegistrationView } from '../registration-view/registration-view';
// import { DirectorView } from '../director-view/director-view';
// import { GenreView } from '../genre-view/genre-view';
// import { ProfileView } from '../profile-view/profile-view';
// import { UpdateProfile } from '../update-profile/update-profile';

// class MainView extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       user: null,
//     };
//   }

//   componentDidMount() {
//     let accessToken = localStorage.getItem('token');
//     if (accessToken !== null) {
//       // this.setState({
//       //   user: localStorage.getItem('user'),
//       // });
//       this.props.setUser(localStorage.getItem('user'));
//       this.getMovies(accessToken);
//     }
//   }

//   getMovies(token) {
//     axios
//       .get('https://flixology.herokuapp.com/movies', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         this.props.setMovies(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   onLoggedIn(authData) {
//     this.setState({
//       user: authData.user.Username,
//     });

//     localStorage.setItem('token', authData.token);
//     localStorage.setItem('user', authData.user.Username);
//     this.getMovies(authData.token);
//   }

//   onLoggedOut(authData) {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     this.setState({
//       user: null,
//     });
//     window.open('/', '_self');
//   }

//   render() {
//     let { movies } = this.props;
//     let { user } = this.state;

//     return (
//       <Router>
//         <Container>
//           <div className='main-view'>
//             <Navbar className='fixed-top' bg='dark' variant='dark'>
//               <Nav className='mr-auto'>
//                 <Nav.Link as={Link} to='/'>
//                   Home
//                 </Nav.Link>
//                 <Nav.Link onClick={() => this.onLoggedOut()}>LogOut</Nav.Link>
//                 <Nav.Link as={Link} to={`/users/${user}`}>
//                   Profile
//                 </Nav.Link>
//               </Nav>
//             </Navbar>
//             <br></br>
//             <br></br>
//             <div className='main-view'>
//               <Route
//                 exact
//                 path='/'
//                 render={() => {
//                   if (!user)
//                     return (
//                       <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
//                     );
//                   return <MoviesList movies={movies} />;
//                 }}
//               />

//               <Route
//                 exact
//                 path='/users/'
//                 render={() => window.open('/client', '_self')}
//               />

//               <Route path='/register' render={() => <RegistrationView />} />

//               <Route
//                 path='/movies/:movieId'
//                 render={({ match }) => (
//                   <MovieView
//                     movie={movies.find((m) => m._id === match.params.movieId)}
//                   />
//                 )}
//               />

//               <Route
//                 path='/movies/director/:name'
//                 render={({ match }) => {
//                   if (!movies) return <div className='main-view' />;
//                   return (
//                     <DirectorView
//                       director={
//                         movies.find(
//                           (m) => m.Director.Name === match.params.name
//                         ).Director
//                       }
//                     />
//                   );
//                 }}
//               />

//               <Route
//                 path='/movies/genres/:name'
//                 render={({ match }) => {
//                   if (!movies) return <div className='main-view' />;
//                   return (
//                     <GenreView
//                       genre={
//                         movies.find((m) => m.Genre.Name === match.params.name)
//                           .Genre
//                       }
//                     />
//                   );
//                 }}
//               />

//               <Route
//                 exact
//                 path='/users/:userId'
//                 render={() => <ProfileView movies={movies} />}
//               />

//               <Route path='/user/update' render={() => <UpdateProfile />} />
//             </div>
//           </div>
//         </Container>
//       </Router>
//     );
//   }
// }

// let mapStateToProps = (state) => {
//   return { movies: state.movies };
// };

// export default connect(mapStateToProps, { setMovies, setUser })(MainView);
