import { Sidenav } from "./Sidenav"

export function LoadingPage({menuOption, setMenuOption}) {
    return (
        <div className='page-container flex-c'>
            <div className='wrapper'>
                <div className='icon-area flex-c'>MAIN MENU</div>
                <div className='main-header size-100 flex-c'><h2>HNECT Learning Centre</h2></div>
                <Sidenav menuOption={menuOption} setMenuOption={setMenuOption} />
                <div className="flex-c">
                    <div className="loading-circle"></div>
                    <div className="loading-circle loading-circle2"></div>
                    <div className="loading-circle loading-circle3"></div>
                </div>
            </div>
        </div>
    )
}