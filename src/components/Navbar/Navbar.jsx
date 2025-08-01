import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link, NavLink } from 'react-router-dom';
import Container from './../Container/Container';

export default function Navbar() {
  // state to toggle the mobile menu
  const [showMenu, setShowMenu] = useState(false);

  // state to detect if the user has scrolled past a certain poin
  const [hasScrolled, setHasScrolled] = useState(false)

  // Toggle menu visibility on mobile
  const handleMenu = () => setShowMenu((pev) => !pev);

  // Add scroll event listener once when compoent mounts
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80)
        setHasScrolled(true)
      else
        setHasScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])
  return (  
    <nav className={`transition-all duration-300 bg-Cgray-500 text-white font-bold text-[clamp(24px,5vw,32px)]  uppercase z-10 fixed w-full ${hasScrolled ? 'py-4' : 'py-8'}`}>
      <Container>
        <div className='flex justify-between items-center'>
          <h1>
            <Link to={'/'}> start FrameWork</Link>
          </h1>

          {/* Mobile menu button (hidden on medium screens and up) */}
          <div className="w-16 h-12 flex items-center justify-center md:hidden">
            <button onClick={() => handleMenu()} className={`${showMenu == false ? 'border-1' : 'border-4 drop-shadow-2xl'}  border-gray-900 text-gray-900 px-4 py-2 rounded-xl `}><LuMenu /></button>
          </div>

          {/* Desktop navigation links */}
          <ul className={`hidden md:flex md:flex-row md:gap-6`}>
            <li className="flex items-center"><NavLink className='custom-btn uppercase' to={'/about'}>About</NavLink></li>
            <li className="flex items-center"><NavLink className='custom-btn uppercase' to={'/portfolio'}>Portfolio</NavLink></li>
            <li className="flex items-center"><NavLink className='custom-btn uppercase' to={'/contact'}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Mobile navigation links  */}
        <ul className={`md:hidden overflow-hidden flex flex-col gap-4  transition-all duration-500 ease-in-out ${showMenu ? 'max-h-60 py-3' : 'max-h-0'}`}>
          <li><NavLink className='custom-btn uppercase' to={'/about'}>About</NavLink></li>
          <li><NavLink className='custom-btn uppercase' to={'/portfolio'}>Portfolio</NavLink></li>
          <li><NavLink className='custom-btn uppercase' to={'/contact'}>Contact</NavLink></li>
        </ul>
      </Container>
    </nav>
  )
}
