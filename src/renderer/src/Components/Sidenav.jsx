import { Classes, Home, Certificate } from "../Assets/SVG/svg"

export function Sidenav() {
  return (
    <div className='main-menu size-100'>
      <div className="menu-option-container flex-c">
        <Home color="#F7F7F7"/>
        <h4 className='menu-heading'>Home</h4>
      </div>
      <div className="menu-option-container flex-c">
        <Classes color="#F7F7F7"/>
        <h4 className='menu-heading'>Lessons</h4>
      </div>
      <div className="menu-option-container flex-c">
        <Certificate color="#F7F7F7"/>
        <h4 className='menu-heading'>Certificates</h4>
      </div>
    </div>
  )
}
