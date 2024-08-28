import { useState } from 'react'
import { LoadingPage } from './Components/LoadingPage'
import { Sidenav } from './Components/Sidenav'
import { HomePage } from './Components/Home Page/HomePage'
import { LessonsPage } from './Components/Lessons Page/LessonsPage'
import { CertificatesPage } from './Components/Certificates Page/CertificatesPage'
import './Styles/App.css'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  )
}

function MainApp() {
  const [menuOption, setMenuOption] = useState("Home")

  const { isPending, error, data } = useQuery({
    queryKey: ['appData'],
    queryFn: async () => {
      const appData = await window.electron.retrieveData();
      return appData
    }
         
  })

  if (isPending) return (
    <LoadingPage />
  )

  if (error) return 'An error has occurred: ' + error.message
  console.log(data)

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


