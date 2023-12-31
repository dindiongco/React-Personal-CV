import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { SelectedPage } from '../shared/types'
import Link from '../components/Link'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

type Props = {
    isTopOfPage: boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

function Navbar({isTopOfPage, selectedPage, setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery('(min-width: 769px)')
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navbarBG = isTopOfPage ? "" : "bg-secondary-400 drop-shadow"

  return (
    <nav className=''>
        <div className={`${navbarBG} fixed top-0 z-30 flex justify-between w-full mx-auto px-8`}>
            <span className='font-extrabold font-anton italic text-2xl py-2'><a href="#" >DI</a></span>

            {isAboveMediumScreens ? (<div className='flex gap-10 items-center'>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>): 
            <button className="p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6"/>
            </button>
            }
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 w-[300px] h-full bg-secondary-400 z-40">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6"/>
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar