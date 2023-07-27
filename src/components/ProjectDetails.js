
import React from 'react';
import { useAppContext } from '../context/AppContext';

const ProjectDetails = () => {
  const { state } = useAppContext();

  return (
    <div>
      <h2>Project Details</h2>
      {state.tasks.length === 0 && <p>No tasks found for the selected project.</p>}
      {state.tasks.map((task) => (
        <div key={task.id}>
          <p>{task.name} - {task.timeSpent} hours</p>
          <p>Description: {task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
