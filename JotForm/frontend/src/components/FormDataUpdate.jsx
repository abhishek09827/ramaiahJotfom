import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const FormComponent = ({ initialValues }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {Object.keys(formData).map((key) => (
          <Grid item xs={12} key={key}>
            <TextField
              name={key}
              label={key}
              value={formData[key]}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent