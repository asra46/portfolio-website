import React from 'react';
import "./WorkCardStyle.css";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="project-title">{props.title}</h2>
      <div className='project-details'>

        <div className='pro-btns'>
          <a href={props.view} className="PrimryBtn">View</a>
<a 
  href={props.source} 
  className="PrimryBtn" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Source
</a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

