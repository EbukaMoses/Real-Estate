import React from 'react'
import './Hero.css'
import Heading from './../../Common/Heading';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
        <Heading title='Search Your Next Home' subtitle='Find new & featured property located in your local city.' />
          <form action="" className="flex">
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder="Property Type" />
            </div>
            <div className="box">
              <span>Advance Filter</span>
            </div>
            <button className="btn">
                <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Hero