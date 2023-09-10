import React from 'react';
import NavBar from './NavBar'; // Import your NavBar component
import Home from './Home';
import Education from './education';
import WorkExperinces from './WorkExperinces';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import { Outlet } from 'react-router-dom';
import {createBrowserRouter, RouterProvider, } from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path: '/',
    element: <div><NavbarWrapper /></div>,
    children:[
      {
        path: '/',
        element: <div><Home /></div>,
      },
      {
        path: '/education',
        element: <div><Education /></div>,
      },
      {
        path: '/workExperinces',
        element: <div><WorkExperinces /></div>,
      },
      {
        path: '/projects',
        element: <div><Projects /></div>,
      },
      {
        path: '/skills',
        element: <div><Skills /></div>,
      },
      {
        path: '/contactMe',
        element: <div><ContactMe /></div>,
      },
    ]
  },
  
])

 function NavbarWrapper (){
  return (
      <div>
        <NavBar />
        <Outlet />
      </div>
  )
} 

function App() {
  return (
    <>
      <RouterProvider router={router} /> 
    </>
    
  );
}

export default App;
