import React from 'react';
import projectData from "./ProjectData";
import WorkCard from "./WorkCard"

const frontendProjects = projectData.filter((project) => project.category === "frontend");

const FrontendProjects = () => {
  return (
    <div>
<div className='project-container'>
      {frontendProjects.map((project) => (
                    <WorkCard key={project.id} imgsrc={project.imgsrc} title={project.title} source={project.source} view={project.url} />
      ))}
      </div>
    </div>
  );
};

export default FrontendProjects;

