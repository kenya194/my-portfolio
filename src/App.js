import React from 'react'

import Header from './components/header/Header';
// import Contact from './components/contact/Contact';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';


// import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Service />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
