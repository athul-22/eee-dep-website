
import './App.css';
import * as React from 'react';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import Members from './pages/Members';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Projects/>
      <Aboutus />
      <Contactus/>
      <Members/>
    </div>
  );
}

export default App;
