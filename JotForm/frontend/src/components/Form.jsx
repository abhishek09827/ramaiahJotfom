import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const FormDataForm = (tableID) => {
  const initialFormData = [
    { field: "Approval" },
    { field: "Status" },
    { field: "Name" },
    { field: "USN" },
    { field: "Status" },
    { field: "Age" },
    { field: "Dept" },
    { field: "HOD" },
    { field: "Contact" },
    { field: "Document" }
  ];

  const [formData, setFormData] = useState({
    "tableID": tableID,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    const fieldValue = type === 'file' ? files[0] : value;
    setFormData({
      ...formData,
      [name]: fieldValue
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const formDataToSend = new FormData();


    // Appending each form field and its value to formDataToSend
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    
    // Sending form data via Axios POST request
    axios.post('http://localhost:3000/api/v1/dept/addEntry', formDataToSend)
      .then(response => {
        console.log('Form submission successful:', response.data);
        // Add your success handling logic here
      })
      .catch(error => {
        console.error('Form submission failed:', error);
        // Add your error handling logic here
      });
      
  };

  return (
  
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Grid container spacing={2}>
        {initialFormData.map((fieldData, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              fullWidth
              id={fieldData.field}
              name={fieldData.field}
              label={fieldData.field}
              type={fieldData.field === 'Document' ? 'file' : 'text'}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              inputProps={{ accept: 'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document' }}
            />
          </Grid>
        ))}
      </Grid>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default FormDataForm;
