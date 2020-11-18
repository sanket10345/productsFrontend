import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signInViewStyles } from '../';
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../auth-action'

export default function Login() {
  const dispatch = useDispatch();
  const store = useSelector(store => store.auth)
  const classes = signInViewStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(auth(email, password))
  }

  return (
    <div className={classes.root}>
      <Form className={classes.loginForm} onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      {
        store.error ? <h3> {store.error}</h3> : null  
      }
    </div>
  );
}
