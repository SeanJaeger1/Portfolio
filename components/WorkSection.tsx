import React from 'react';
import ProjectSection from './ProjectSection';
import { projects, Project } from '../data/projectsData';

const WorkSection: React.FC = () => {
  return (
    <section id="work" aria-label="My work portfolio" className="mt-24">
      <div className="header font-kaisei">My Work</div>
      <hr className="w-10 my-6" />
      
      {projects.map((project: Project, index: number) => (
        <ProjectSection key={index} {...project} />
      ))}
    </section>
  );
};

export default WorkSection;
