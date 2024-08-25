import { useState } from 'react'
import { Sidenav } from './Components/Sidenav'
import './Styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page-container flex-c'>
      <div className='wrapper'>
        <div className='icon-area flex-c'>MAIN MENU</div>
        <div className='main-header size-100 flex-c'>HNECT Learning Centre</div>
        <Sidenav />
        <div className='main-area size-100'>
          <div className='top-dashboard'>
          </div>
          <div className='middle-dashboard'>
          </div>
          <div className='bottom-dashboard'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

