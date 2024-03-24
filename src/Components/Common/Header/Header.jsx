import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import { nav } from "../../Data/Data";

const Header = () => {
  const [navList, setnavList] = useState(false);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span>My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sing-out"></i>Sign in
            </button>
          </div>
          <div className="toggle">
            <button onClick={() => setnavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
