import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/screens/Main';
import NotFound from './components/screens/NotFound';
import Sample from './components/works/Sample';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  // {
  //   path: '/map',
  //   element: <Map />,
  // },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
  // {
  //   path: '/upload',
  //   element: <Upload />,
  // },
  // 404
  {
    path: '/test',
    element: <Sample />
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
