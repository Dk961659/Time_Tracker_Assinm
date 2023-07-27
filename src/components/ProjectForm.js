// src/components/ProjectForm.js
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const ProjectForm = () => {
  const { dispatch } = useAppContext();
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() === '') return;

    const newProject = {
      id: new Date().getTime().toString(),
      name: projectName,
    };

    dispatch({ type: 'ADD_PROJECT', payload: newProject });
    setProjectName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className='project-form-input '
      />
      <button type="submit" className='project-form-button'>Add Project</button>
    </form>
  );
};

export default ProjectForm;
