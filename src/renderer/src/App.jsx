import { useState } from 'react'
import './Styles/App.css'
import { MoonIcon } from './Assets/SVG/svg.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <div className='main-icon size-100 flex-c'>
        <MoonIcon size="50px" color="#ffffff" />
      </div>
      <div className='main-header size-100'></div>
      <div className='main-menu size-100'></div>
      <div className='main-area size-100'>
        <div className='top-dashboard'>
          <div className='top-dashboard-display size-100 flex-c'>Hello</div>
          <div className='top-dashboard-display size-100 flex-c'>Hello</div>
          <div className='top-dashboard-display size-100 flex-c'>Hello</div>
        </div>
        <div className='bottom-dashboard'>
          <div className='bottom-dashboard-display size-100 flex-c'>Hello</div>
          <div className='bottom-dashboard-display size-100 flex-c'>Hello</div>
        </div>
      </div>
    </div>
  )
}

export default App

