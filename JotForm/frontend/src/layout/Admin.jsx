import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Tables from '../components/Tables';
import FormDataForm from '../components/Form';
import { Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Navigate} from 'react-router-dom';
import Example from './Dashboard';
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}




export default function Admin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/dept/fetchDept');
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  const location = useLocation();
  let content;
  if (location.pathname === '/admin') {
    content = <div style={{ padding: '20px' }}>
    {data.map((department) => (
      <Paper key={department._id} elevation={3} style={{ marginBottom: '20px', padding: '20px' }}>
        <Typography variant="h5">{department.dept_name}</Typography>
        <List>
          <ListItem>
            <ListItemText primary={`Department ID: ${department._id}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Administrator: ${department.isAdmin ? 'Yes' : 'No'}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Department Email: ${department.dept_email}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Department Password: ${department.dept_paswd}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Avatar: ${department.avatar}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Tables: ${department.tables.length}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Forms: ${department.forms.length}`} />
          </ListItem>
        </List>
        <Button><Link to={'/example'}>View</Link></Button>
      </Paper>
    ))}
  </div>;
  }
  else if(location.pathname === '/table'){
    content = <Example />
  }

    return (
      <>
        {content}
        </>);
}
