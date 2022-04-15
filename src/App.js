import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import CaseStudy from './pages/caseStudy';
import Home from './pages/home';
import Team from './pages/team';


function App() {
  const [ dropdownVisible, setDropdownVisible ] = useState(false);
  const [ sidebarVisible, setSidebarVisible ] = useState(false);

  const toggle = () => {
    setDropdownVisible(!dropdownVisible);
    console.log('Dropdown set to:', dropdownVisible);
  }

  const toggleSidebar = () => {
    if (window.scrollY > 384) {
      setSidebarVisible(true);
    } else {
      setSidebarVisible(false);
    }
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && dropdownVisible === true) {
        setDropdownVisible(false);
        console.log('resized dropdown');
      }
    }

    window.addEventListener('resize', hideMenu);
    window.addEventListener('scroll', toggleSidebar);

    return () => {
      window.removeEventListener('resize', hideMenu);
      window.removeEventListener('scroll', toggleSidebar);
    }
  }, [dropdownVisible]);


  return (
    <div>
      <Navbar toggle={toggle}/>
      <Dropdown toggle={toggle} dropdownVisible={dropdownVisible}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/casestudy' element={<CaseStudy sidebarVisible={sidebarVisible}/>} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <footer className='h-40'></footer>
    </div>
  );
}

export default App;
