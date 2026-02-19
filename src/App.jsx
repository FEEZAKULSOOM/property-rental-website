
import React from 'react'
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />          {/* Navigation bar - fixed at top */}
      <Outlet />        {/* Dynamic page content */}
      <Footer />        {/* Footer section */}
    </>
  )
}

export default App;
