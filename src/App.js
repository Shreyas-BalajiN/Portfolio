import './App.css';
import React from 'react';
import Land from './components/Land';
import AboutMe from './components/AboutMe';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <React.Fragment>
      <div className='flex'>
        <div className='z-10 fixed'>
        <Sidebar />
        </div>
      <div>
       <Land />
       <AboutMe />
       </div>
       </div>

    </React.Fragment>
  );
}

export default App;
