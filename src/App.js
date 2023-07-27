
import React from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import TaskForm from './components/TaskForm';
import ProjectDetails from './components/ProjectDetails';
import { AppProvider } from './context/AppContext';
import './index.css'

function App() {
  return (
    <AppProvider>
      <div className='main-container '>
        <h1>Time Tracking Application</h1>

        <div>
          <h2>Create Project</h2>
          <ProjectForm />
        </div>

        <div>
          
          <ProjectList />
        </div>

        <div className='task-form-style'>
          <h2>Create Task</h2>
          <TaskForm />
        </div>

        <div>
          
          <ProjectDetails />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
