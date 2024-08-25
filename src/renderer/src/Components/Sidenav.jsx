import { Classes, Home, Certificate } from "../Assets/SVG/svg"

function setOptionSelected(e, setMenuOption) {
  const menuOptionSelected = e.currentTarget.querySelector(".menu-heading").textContent
  setMenuOption(menuOptionSelected)
}

export function Sidenav({menuOption, setMenuOption}) {
  return (
    <div className='main-menu size-100'>
      <div className={menuOption === "Home" ? "menu-option-container-selected flex-c" : "menu-option-container flex-c"} onClick={(e) => setOptionSelected(e, setMenuOption)}>
        <Home color="#F7F7F7"/>
        <h4 className='menu-heading'>Home</h4>
      </div>
      <div className={menuOption === "Lessons" ? "menu-option-container-selected flex-c" : "menu-option-container flex-c"} style={menuOption === "Lessons" ? {backgroundColor: "#3E64FF", scale: 1.06} : null} onClick={(e) => setOptionSelected(e, setMenuOption)}>
        <Classes color="#F7F7F7"/>
        <h4 className='menu-heading'>Lessons</h4>
      </div>
      <div className={menuOption === "Certificates" ? "menu-option-container-selected flex-c" : "menu-option-container flex-c"} style={menuOption === "Certificates" ? {backgroundColor: "#3E64FF", scale: 1.06} : null} onClick={(e) => setOptionSelected(e, setMenuOption)}>
        <Certificate color="#F7F7F7"/>
        <h4 className='menu-heading'>Certificates</h4>
      </div>
    </div>
  )
}
