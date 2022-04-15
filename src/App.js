import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import Dropdown from './components/Dropdown';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

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
      <Banner />
      <Sidebar sidebarVisible={sidebarVisible}/>
      <Content />
    </div>
  );
}

export default App;
