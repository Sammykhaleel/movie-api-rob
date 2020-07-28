import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container>
        <br></br>
        <br></br>
        <Row>
          <div>
            <Card style={{ width: '35%' }}>
              <Card.Body>
                <Col>
                  <Card.Img variant='top' src={movie.ImageUrl} />
                </Col>
                <Card.Title>{movie.Title}</Card.Title>
                <Col>
                  <Card.Text>{movie.Description}</Card.Text>
                </Col>
                <Link to={`/movies/${movie._id}`}>
                  <Button variant='dark link'>Open</Button>
                </Link>
                <Link to={`/movies/directors/${movie.Director.Name}`}>
                  <Button variant='dark link'>Director</Button>
                </Link>
                <Link to={`/movies/genres/${movie.Genre.Name}`}>
                  <Button variant='dark link'>Genre</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Row>
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
