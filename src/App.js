import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import Dropdown from './components/Dropdown';
import Sidebar from './components/Sidebar';


function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [sidebarVisible, setSidebarVisisble] = useState(false)

  const toggle = () => {
    setDropdownVisible(!dropdownVisible)
    console.log('Dropdown set to:', dropdownVisible)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && dropdownVisible === true) {
        setDropdownVisible(false)
        console.log('resized dropdown')
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  }, [dropdownVisible])

  return (
    <div>
      <Navbar toggle={toggle}/>
      <Dropdown toggle={toggle} dropdownVisible={dropdownVisible}/>
      <Banner />
      <Sidebar />
      <div class='h-screen'>

      </div>

    </div>
  );
}

export default App;
