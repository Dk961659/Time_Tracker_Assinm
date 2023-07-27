
import React from 'react';
import { useAppContext } from '../context/AppContext';

const ProjectList = () => {
  const { state } = useAppContext();

  return (
    <div>
      <h2>Project Listing</h2>
      <ul>
        {state.projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
