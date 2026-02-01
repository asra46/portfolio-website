import React from 'react';
import "./AboutContentStyle.css";
import { Link } from 'react-router-dom';


const AboutContent = () => {
  return (
    <div className='About'>

    <div className='left'>
        <h1>About <span>Me</span></h1>
          <p>I'm a passionate and creative professional specializing in web development, WordPress website creation, UI/UX design, and graphic design. With a blend of technical expertise and artistic flair, I aim to create innovative and user-friendly solutions that leave a lasting impression
          As a Web Developer, I build responsive and dynamic websites tailored to meet specific client needs. My knowledge of modern technologies and best practices ensures websites that are not only functional but also visually appealing.
          In my role as a WordPress Web Developer, I specialize in designing and customizing WordPress sites, empowering businesses and individuals with the ability to manage their online presence effortlessly.
          My passion for UI/UX Design drives me to create interfaces that enhance the user experience, ensuring that every interaction is smooth, intuitive, and enjoyable.
          As a Graphic Designer, I bring ideas to life through visually stunning designs, from logos to marketing materials, aligning perfectly with brand identity and goals.
          I believe in the power of innovation and collaboration and am always excited to take on new challenges that push the boundaries of creativity and technology.
          </p>
        <Link to="/contact">
        <button className='PrimryBtn-light PrimryBtn'>Contact</button>
        </Link>

    </div>


    </div>
  )
}

export default AboutContent