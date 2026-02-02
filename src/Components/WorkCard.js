import React from 'react';
import "./WorkCardStyle.css";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img 
        src={props.imgsrc} 
        alt={props.title} 
        className="project-img" 
      />

      <h2 className="project-title">{props.title}</h2>

      <p className="project-desc">
        {props.desc}
      </p>

      <div className="project-details">
        <div className="pro-btns">
          <a 
            href={props.view} 
            className="PrimryBtn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Live Demo
          </a>

          <a 
            href={props.source} 
            className="PrimryBtn btn-light" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
