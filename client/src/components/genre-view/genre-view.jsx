import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movies, genre } = this.props;

    if (!genre) return null;

    return (
      <Container>
        <div className='genre-view'>
          <br />
          <br />
          <Row>
            <Col>
              <span>{genre.Name}</span>
            </Col>
            <Col>
              <span>{genre.Description}</span>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
