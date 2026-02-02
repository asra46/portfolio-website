import React from 'react';
import projectData from "./ProjectData";
import WorkCard from './WorkCard';
import "./WorkCardStyle.css";
const AllProjects = () => {
  return (
    <div>
    <div className='project-container'>
{projectData.map((item) => (
  <WorkCard
    key={item.id}
    imgsrc={item.imgsrc}
    title={item.title}
    desc={item.desc}
    view={item.url}
    source={item.source}
  />
))}


      </div>
    </div>
  );
};

export default AllProjects;