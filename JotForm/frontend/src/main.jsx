import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import FormDataForm from './components/Form.jsx'
import Example from './layout/Dashboard.jsx'
import Tables from './components/Tables.jsx'
import Admin from './layout/Admin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Example />}>
      <Route path='form' element={<FormDataForm />} />
      <Route path='table' element={<Tables />} />
      <Route path='admin' element={<Admin />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
