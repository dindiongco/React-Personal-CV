import { useEffect, useState } from 'react'
import { SelectedPage } from './shared/types'
import Navbar from './scenes/Navbar'
import Home from './scenes/Home'
import About from './scenes/About'
import Contact from './scenes/Contact'
import Experience from './scenes/Experience'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='app | bg-black'>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Navbar>
      <Home setSelectedPage={setSelectedPage}></Home>
      <About setSelectedPage={setSelectedPage}></About>
      <Experience setSelectedPage={setSelectedPage}></Experience>
      <Contact setSelectedPage={setSelectedPage}></Contact>
    </div>
  )
}

export default App
