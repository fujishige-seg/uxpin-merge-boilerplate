import React from 'react';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const Login = () => (
  <div>
    <h2>Login</h2>
    <TextField label="Username" />
    <TextField label="Password" type="password" />
    <Button>Login</Button>
  </div>
);

export default Login;

