import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Navigate, useLocation } from 'react-router-dom';
import Example from './Dashboard';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g., send login request to server
    console.log('Email:', email);
    console.log('Password:', password);
    setSubmitted(true);
  };

  if (submitted) {
    // Redirect to another page upon successful login
    return <Navigate to="/example" />;
  }
  const location = useLocation();
  let content;
  if (location.pathname === '/example') {
    content = <Example />;
  }
  else{
   content = <StyledContainer component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
          Sign in
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <StyledSubmitButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Sign In
          </StyledSubmitButton>
        </StyledForm>
      </div>
    </StyledContainer>
  }
  

  return (
    <>
    {content}
    </>
  );
};

export default LoginPage;
