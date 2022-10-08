import React from 'react';
import './App.css';
import useNavigation from './hooks/useNavigation';

const App = () => {
  const { getCurrentRoute, updateCurrentRoute } = useNavigation();
  return (
    <div className="App">
      <button onClick={() => {console.log(getCurrentRoute())}}>Check Route</button>
      <button onClick={() => {updateCurrentRoute('resume')}}>Update Route</button>
    </div>
  );
}

export default App;
