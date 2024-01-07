import './App.css';
import React from 'react';
import Land from './components/Land';
import AboutMe from './components/AboutMe';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import Contact from './components/Contact';
function App() {
  return (
    <React.Fragment>
      <div className='flex overflow-x-hidden'>
        <div className='z-10 fixed'>
        <Sidebar />
        </div>
      <div>
       <Land />
       <AboutMe />
       <Resume />
       <Contact />
       </div>
       </div>

    </React.Fragment>
  );
}

export default App;
