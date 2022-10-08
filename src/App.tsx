import React from 'react';
import './App.css';
import { Header, WorkflowRenderer } from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <WorkflowRenderer />
    </div>
  );
}

export default App;
