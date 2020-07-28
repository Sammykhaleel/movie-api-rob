import React, { useState } from 'react';
import axios from 'axios';
import { Form, Container, Button } from 'react-bootstrap';
import './registration-view.scss';

import { Link } from 'react-router-dom';

export function RegistrationView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdUser = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: dob,
    };

    axios
      .post('https://flixology.herokuapp.com/users', createdUser)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert('User created successfully');
        window.open('/client', '_self');
      })
      .catch((e) => {
        console.log(e.response);
        alert('Error processing request');
      });
  };

  return (
    <Container>
      <br />
      <br />
      <Form style={{ width: '32rem', margin: 'auto', textAlign: 'center' }}>
        <Form.Group controlId='formBasicUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicDate'>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type='date'
            value={dob}
            placeholder='12/31/1986'
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>

        <Button variant='dark' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
        <Link to={`/`}>
          <Button variant='dark link' type='submit'>
            Cancel
          </Button>
        </Link>
      </Form>
    </Container>
  );
}

// //Importing react and bootstrap components
// import React, { useState } from 'react';
// import { Button, Row, Col, Form } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import axios from 'axios';

// //Importing scss
// import './registration-view.scss';

// export function RegistrationView(props) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [birthday, setBirthday] = useState('');

//   //Allows to login with any credentials
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('https://flixology.herokuapp.com/users', {
//         Username: username,
//         Password: password,
//         Email: email,
//         Birthday: birthday,
//       })
//       .then((response) => {
//         const data = response.data;
//         console.log(data);
//         window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
//       })
//       .catch((e) => {
//         console.log('error registering the user');
//       });
//   };

//   return (
//     <Container className='container'>
//       <br />
//       <br />
//       <Form>
//         <Form.Group className='registration'>
//           <h4>Please Register</h4>
//           <Row>
//             <Col>
//               <Form.Label className='Label'>Username:</Form.Label>
//               <Form.Control
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className='Control'
//                 type='text'
//                 placeholder='Enter Username'
//               />
//             </Col>
//             <Col>
//               <Form.Label className='Label'>Email:</Form.Label>
//               <Form.Control
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className='email'
//                 type='email'
//                 placeholder='Enter Email'
//               />
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <Form.Label className='Label'>Birthday:</Form.Label>
//               <Form.Control
//                 value={birthday}
//                 onChange={(e) => setBirthday(e.target.value)}
//                 className='birthday'
//                 type='date'
//                 placeholder='Enter Birthday'
//               />
//             </Col>
//             <Col>
//               <Form.Label className='Label'>Password:</Form.Label>
//               <Form.Control
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className='Control2'
//                 type='password'
//                 placeholder='Enter Password'
//               />
//             </Col>
//           </Row>
//           <Row className='Button'>
//             <Col>
//               <Button type='button' variant='dark' onClick={handleSubmit}>
//                 Submit
//               </Button>
//             </Col>
//           </Row>
//         </Form.Group>
//       </Form>
//     </Container>
//   );
// }
