import React, { useState } from 'react';
import { Button, TextField, Typography, Container,FormControl, Radio, RadioGroup, FormLabel, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';
import { Navigate, useLocation, Link } from 'react-router-dom';
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
  const [selectedValue, setSelectedValue] = React.useState('Admin');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


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
    return selectedValue === 'Admin' ? <Navigate to="/admin" /> : <Navigate to="/example" />;
  }
  const location = useLocation();
  let content;
  if (location.pathname === '/example') {
    content = <Example />;
  }
  else if(location.pathname === '/') {
   content = <StyledContainer component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h4" sx={{ marginBottom: 3 }}>
          Sign in
        </Typography>
        <StyledForm>
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
           <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Select Role</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
        <FormControlLabel value="Dept" control={<Radio />} label="Dept" />
      </RadioGroup>
    </FormControl>
    <Link to={selectedValue==="Admin" ? "/admin" : "/example"}>
          <StyledSubmitButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Sign In
          </StyledSubmitButton>
          </Link>
        </StyledForm>
      </div>
    </StyledContainer>
  }
  else {
    content = <Example />;
  }
  

  return (
    <>
    {content}
    </>
  );
};

export default LoginPage;
