//Importing react and bootstrap components
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <span className='value'>{movie.Genre.Name}</span>
              </div>
              <div className='movie-director'>
                <span className='label'>
                  <strong>Director: </strong>
                </span>
                <span className='value'>{movie.Director.Name}</span>
              </div>
              <Button variant='dark'>
                <a
                  onClick={() => {
                    window.location.href = '/movies/';
                  }}
                >
                  Back
                </a>
              </Button>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </div>
      </Container>
    );
  }
}
