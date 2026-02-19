import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Houses from './Components/Houses/Houses.jsx';
import Listing from './Components/Listing/Listing.jsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import UserContext from './Components/UserContext/UserContext.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Tent from './Components/Tent/Tent.jsx';
import PoolHouses from './Components/PoolHouses/PoolHouses.jsx';
import Cabins from './Components/Cabins/Cabin.jsx';
import Rooms from './Components/Rooms/Rooms.jsx';
import FarmHouses from './Components/FarmHouses/FarmHouses.jsx';

// App router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />                {/* Home page */}
      <Route path="login" element={<Login />} />        {/* Login page */}
      <Route path="signup" element={<Signup />} />      {/* Signup page */}
      <Route path="houses" element={<Houses />} />      {/* Houses listing */}
      <Route path="farmhouses" element={<FarmHouses />} /> {/* Farm houses */}
      <Route path="tenthouses" element={<Tent />} />    {/* Tent houses */}
      <Route path="poolhouses" element={<PoolHouses />} /> {/* Pool houses */}
      <Route path="rooms" element={<Rooms />} />        {/* Rooms */}
      <Route path="cabins" element={<Cabins />} />      {/* Cabins */}
      <Route path="listing" element={<Listing />} />    {/* Add listing */}
      <Route path="contact" element={<Contact />} />    {/* Contact page */}
    </Route>
  )
);

// Render app with context provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </StrictMode>
);