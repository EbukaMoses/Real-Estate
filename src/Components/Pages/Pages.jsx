import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './../Common/Header/Header'
import Home from './../Home/Home';
import Footer from './../Common/Footer/Footer';
import About from './../About/About';
import Services from '../Services/Services';
import Blog from './../Blog/Blog';
import Pricing from './../Pricing/Pricing'
import Contact from '../Contact/Contact';

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/blog" Component={Blog} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Pages