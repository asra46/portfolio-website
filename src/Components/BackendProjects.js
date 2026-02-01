import React from 'react';
import projectData from "./ProjectData";
import WorkCard from './WorkCard';


const backendProjects = projectData.filter((project) => project.category === "backend");

const BackendProjects = () => {
  return (
    <div>
      <div className='project-container'>
      {backendProjects.map((project) => (
        <WorkCard key={project.id} imgsrc={project.imgsrc} title={project.title} text={project.text} view={project.url} />
      ))}
      </div>
    </div>
  );
};

export default BackendProjects;