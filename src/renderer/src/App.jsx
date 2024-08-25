import { useState } from 'react'
import './Styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page-container flex-c'>
      <div className='wrapper'>
        <div className='main-header size-100'></div>
        <div className='main-menu size-100'></div>
        <div className='main-area size-100'>
          <div className='top-dashboard'>
            <div className='top-dashboard-display size-100 flex-c'>Hello</div>
            <div className='top-dashboard-display size-100 flex-c'>Hello</div>
            <div className='top-dashboard-display size-100 flex-c'>Hello</div>
          </div>
          <div className='middle-dashboard'>
            <div className='middle-dashboard-display size-100 flex-c'>Hello</div>
            <div className='middle-dashboard-display size-100 flex-c'>Hello</div>
            <div className='middle-dashboard-display size-100 flex-c'>Hello</div>
            <div className='middle-dashboard-display size-100 flex-c'>Hello</div>
          </div>
          <div className='bottom-dashboard'>
            <div className='bottom-dashboard-display size-100 flex-c'>Hello</div>
            <div className='bottom-dashboard-display size-100 flex-c'>Hello</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

