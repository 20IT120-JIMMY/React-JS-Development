import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {

    // Hooks
    // states
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // onChange function
    let textChanged = (event) => {
        event.preventDefault();
        if (event.target.name === "username") {
            setUsername(event.target.value);
          } else if (event.target.name === "password") {
            setPassword(event.target.value);
          }
    }
    // onSubmit
    // axios
    let doLogin = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", {username, password},{withCredentials:true})
        .then(response=>console.log(response.data))
        .catch(error=>error);
    }


  return (
    <div>
      <Form onSubmit={doLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control name="username" type="text" placeholder="Enter user name" value={username} onChange={textChanged}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" value={password} onChange={textChanged}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
