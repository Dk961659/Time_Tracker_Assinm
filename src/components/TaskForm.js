
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const TaskForm = () => {
  const { state, dispatch } = useAppContext();
  const [selectedProject, setSelectedProject] = useState('');
  const [taskName, setTaskName] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [description, setDescription] = useState('');

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '' || timeSpent <= 0 || selectedProject === '') return;

    const newTask = {
      id: new Date().getTime().toString(),
      name: taskName,
      projectId: selectedProject,
      timeSpent: parseFloat(timeSpent),
      description: description,
    };

    dispatch({ type: 'ADD_TASK', payload: newTask });
    setTaskName('');
    setTimeSpent('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} >
      <select value={selectedProject} onChange={handleProjectChange} className='task-form'>
        <option value="">Select a Project</option>
        {state.projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className='task-form'
      />
      <input
        type="number"
        placeholder="Time spent (hours)"
        value={timeSpent}
        onChange={(e) => setTimeSpent(e.target.value)}
        className='task-form'
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='task-form-des'
      />
      <button type="submit" className='project-form-button'>Add Task</button>
    </form>
  );
};

export default TaskForm;
