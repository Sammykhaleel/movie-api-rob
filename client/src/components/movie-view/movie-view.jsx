//Importing react and bootstrap components
import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

import './movie-view.scss';

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
          <Card>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <br />
                <img className='movie-poster' src={movie.ImageUrl} />
                <div className='movie-title'>
                  <span className='label'>
                    <strong>Title: </strong>
                  </span>
                </div>
                <div>
                  <span className='value'>
                    <span>{movie.Title}</span>
                  </span>
                </div>
              </Col>
              <Col>
                <div className='movie-description'>
                  <br />
                  <span className='label'>
                    <strong>Description: </strong>
                  </span>
                </div>
                <div>
                  <span className='value'>{movie.Description}</span>
                </div>
                <div className='movie-genre'>
                  <span className='label'>
                    <strong>Genre: </strong>
                  </span>
                  <Link
                    className='link-color'
                    to={`/movies/genres/${movie.Genre.Name}`}
                  >
                    <Button className='value link-color' variant='link'>
                      {movie.Genre.Name}
                    </Button>
                  </Link>
                </div>
                <div className='movie-director'>
                  <span className='label'>
                    <strong>Director: </strong>
                    <Link to={`/movies/director/${movie.Director.Name}`}>
                      <Button className='value link-color' variant='link'>
                        {movie.Director.Name}
                      </Button>
                    </Link>
                  </span>
                </div>
              </Col>
              <Col xs={2}></Col>
            </Row>
            <Row>
              <Link to={`/`}>
                <Button variant='dark link'>Back</Button>
              </Link>
            </Row>
            <br />
          </Card>
        </div>
        <br />
      </Container>
    );
  }
}
