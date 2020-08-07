import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import '/index.scss';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container>
        <br></br>
        <br></br>
        <Card>
          <Row>
            <div>
              <Card style={{ width: '75%' }}>
                <Col>
                  <Card.Body>
                    <Card.Header className='text-center'>
                      <Link className='link-color' to={`/movies/${movie._id}`}>
                        <strong>{movie.Title}</strong>
                      </Link>
                    </Card.Header>

                    <Row>
                      <Col sm={6}>
                        <br />
                        <Card.Img
                          className='text-left img'
                          src={movie.ImageUrl}
                        />
                      </Col>
                      <Col sm={6}>
                        <br />
                        <Card.Text className='text-center'>
                          {movie.Description}
                        </Card.Text>
                        <br />
                        <Link to={`/movies/${movie._id}`}>
                          <Button variant='dark link'>Open</Button>
                        </Link>
                        <Link to={`/movies/director/${movie.Director.Name}`}>
                          <Button variant='dark link' className='cursor'>
                            Director
                          </Button>
                        </Link>
                        <Link to={`/movies/genres/${movie.Genre.Name}`}>
                          <Button variant='dark link'>Genre</Button>
                        </Link>
                      </Col>
                      <br />
                    </Row>
                  </Card.Body>
                </Col>
              </Card>
            </div>
          </Row>
        </Card>
      </Container>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     Title: PropTypes.string,
//     Description: PropTypes.string.isRequired,
//     ImageUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };
