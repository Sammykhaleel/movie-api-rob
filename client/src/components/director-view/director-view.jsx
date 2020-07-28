import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class DirectorView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movies, director } = this.props;

    if (!director) return null;

    return (
      <Container>
        <div className='director-view'>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <span>{director.Name}</span>
            </Col>
            <Col>
              <span>{director.Bio}</span>
              <span>{director.Birthyear}</span>
              {/* <span>{director.Deathyear}</span> */}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
