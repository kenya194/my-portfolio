import React from 'react'

import Header from './components/header/header';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Service from './components/service/service';


// import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
