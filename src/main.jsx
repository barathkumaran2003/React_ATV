import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ATVhome from './Component/ATVhome.jsx'
import Exploremore from './Component/Exploremore.jsx';
import Service from './Component/Service.jsx';
import News from './Component/news.jsx';
import Contact from './Component/Contact.jsx';
import Team from './Component/Team.jsx';
import Shop from './Component/Shop.jsx';
import Signinpage from './Component/Signinpage.jsx';
import Loginpage from './Component/Loginpage.jsx';
import Singup from './Component/Singup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signinpage/>,
  },
  {
    path: '/Exploremore',
    element: <Exploremore/>
  },
  {
    path: '/Service',
    element: <Service/>
  },
  {
    path: '/News',
    element: <News/>
  },
  {
    path: '/Contact',
    element: <Contact/>
  },
  {
    path: '/Team',
    element: <Team/>
  },
  {
    path: '/Shop',
    element: <Shop/>
  },
  {
    path: '/Loginpage',
    element: <Loginpage/>
  },
  {
    path: '/Signup',
    element: <Singup/>
  },
  {
    path: '/Home',
    element: <ATVhome/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
