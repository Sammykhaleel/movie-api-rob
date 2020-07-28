//Importing react and bootstrap components
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movie } = this.props;

    if (!movie) return null;

    return (
      <Container>
        <div className='movie-view'>
          <br></br>
          <br></br>
          <Row>
            <Col xs={2}></Col>
            <Col>
              <img className='movie-poster' src={movie.ImageUrl} />
              <div className='movie-title'>
                <span className='label'>
                  <strong>Title: </strong>
                </span>
                <span className='value'>
                  <span>{movie.Title}</span>
                </span>
              </div>
            </Col>
            <Col>
              <div className='movie-description'>
                <span className='label'>
                  <strong>Description: </strong>
                </span>
                <span className='value'>{movie.Description}</span>
              </div>
              <div className='movie-genre'>
                <span className='label'>
                  <strong>Genre: </strong>
                </span>
                <Link to={`/movies/genres/${movie.Genre.Name}`}>
                  <Button className='value' variant='link'>
                    {movie.Genre.Name}
                  </Button>
                </Link>
              </div>
              <div className='movie-director'>
                <span className='label'>
                  <strong>Director: </strong>
                </span>
                <Link to={`/movies/directors/${movie.Director.Name}`}>
                  <Button className='value' variant='link'>
                    {movie.Director.Name}
                  </Button>
                </Link>
              </div>
              <Link to={`/`}>
                <Button variant='dark link'>Back</Button>
              </Link>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </div>
      </Container>
    );
  }
}
