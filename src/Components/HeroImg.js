import React, { useState, useEffect } from 'react';
import "./HeroImgStyle.css";
import introImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const HeroImg = () => {



  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="Background" />
      </div>
      <div className="content">
        <h1 className="fade-in">Hi, I'm <span className="highlight">Asra Nawaz</span></h1>
        <h2 className="slide-up">And</h2>
        <p className="typewriter">I am  <span className='highlight px-2'>web developer</span></p>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

