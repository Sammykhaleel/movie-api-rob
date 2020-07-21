//Importing react and bootstrap components
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MovieCard extends React.Component {
  render() {
    const { movie, onClick } = this.props;

    return (
      <Container>
        <Row>
          <Card style={{ width: '30%' }}>
            <Card.Body>
              <Col>
                <Card.Img variant='top' src={movie.ImageUrl} />
              </Col>
              <Card.Title>{movie.Title}</Card.Title>
              <Col>
                <Card.Text>{movie.Description}</Card.Text>
              </Col>
              <Button onClick={() => onClick(movie)} variant='dark'>
                Open
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
