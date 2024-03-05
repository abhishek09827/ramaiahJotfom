import {React, useState, useEffect} from 'react'

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import Button from '@mui/material/Button';
import axios from 'axios'
import FormDialog from './Dialog';
function Tables(columns) {
  const [open, setOpen] = useState(false);
  const [formData, setFormDta] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = (params) => {
    handleClickOpen()
    setFormDta(params)
  }
  const handleDelete = async (params) => {
    const response = await axios.post('http://localhost:3000/api/v1/dept/deleteEntry', {
      "USN": params,
      "tableId": "65e5cdad3b6358b28d3c303d"
    });
    console.log(response);
         
  }
    const [rowData, setRowData] = useState([]);
    
      // Column Definitions: Defines & controls grid columns.
      const [colDefs, setColDefs] = useState([
      ]);
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/dept/getTables/65e5cdad3b6358b28d3c303d');
          setRowData(response.data.data.rowContent);
          response.data.data.colDef.forEach((item,index) => {
            console.log(item.field);
            if (item.field === 'Document') {
              response.data.data.colDef[index]= { ...item,editable:false ,cellRenderer: (params) => <div>
                <Button onClick={() => {}}> <a href={params.value}>Click</a></Button>

              </div>
               };
               
               // You can add other properties here as well
            }
            
          });
          setColDefs([
            ...response.data.data.colDef,
            {
              field: "Actions",
              cellRenderer: (params) => (
                <div>
                  <Button variant='outlined' color='primary' onClick={() => handleUpdate(params.data)}>Update</Button>
                  <Button variant='outlined' color='secondary' onClick={() => handleDelete(params.data)}>Delete</Button>
                </div>
              )
            }
          ]);
          console.log(colDefs);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      
      useEffect(() => {
        fetchData();
        
      }, []);
      console.log(colDefs);
      

    const defaultColDef= {
        editable: true, filter: true, sortable: true
    }
   
      // Container: Defines the grid's theme & dimensions.
      return (
        <div
          className={
            "ag-theme-quartz h-screen"
          }
        >
          <div>
            <FormDialog open={open} handleClose={handleClose} data={formData}/>
          </div>
          <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} />
        </div>
      );
}

export default Tables