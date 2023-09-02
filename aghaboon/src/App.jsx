import React from 'react';
import './App.css';
import NavBar from './NavBar'; // Import your NavBar component
import Home from './Home';
import Education from './education';
import WorkExperinces from './WorkExperinces';
import Projects from './Projects';
import Skills from './Skills';
import ContectMe from './ContectMe';
import {createBrowserRouter, RouterProvider, } from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path: '/home',
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
    path: '/contectMe',
    element: <div><ContectMe /></div>,
  },
])

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} /> 
    </>
    
  );
}

export default App;





// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import MyInformation from './NavBar';
// import Home from './Home';
// import Education from './education';

// function App() {
//   return (
//     <BrowserRouter>
//       <MyInformation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/education/*" element={<Education />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
