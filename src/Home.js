import React from 'react'
import Navbar from "./Navbar";
import Header from "./Header";
import Howwork from "./Howwork";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Howwork/>
      <Aboutus/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home