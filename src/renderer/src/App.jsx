import { useState } from 'react'
import { Sidenav } from './Components/Sidenav'
import { HomePage } from './Components/Home Page/HomePage'
import { LessonsPage } from './Components/Lessons Page/LessonsPage'
import { CertificatesPage } from './Components/Certificates Page/CertificatesPage'
import './Styles/App.css'

function App() {
  const [menuOption, setMenuOption] = useState("Home")

  return (
    <div className='page-container flex-c'>
      <div className='wrapper'>
        <div className='icon-area flex-c'>MAIN MENU</div>
        <div className='main-header size-100 flex-c'><h2>HNECT Learning Centre</h2></div>
        <Sidenav menuOption={menuOption} setMenuOption={setMenuOption} />
        {menuOption === "Home" && <HomePage />}
        {menuOption === "Lessons" && <LessonsPage />}
        {menuOption === "Certificates" && <CertificatesPage />}
      </div>
    </div>
  )
}

export default App

