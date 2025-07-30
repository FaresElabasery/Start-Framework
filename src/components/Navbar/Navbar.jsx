import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  return (
    <nav className='py-3.5 px-4 bg-gray-700 text-white font-bold text-[26px] md:text-[28px] uppercase z-10 overflow-hidden flex items-center justify-between'>
      <div className='pt-3 flex justify-between items-center'>
        <h1>start FrameWork</h1>
        <div className="w-16 h-12 flex items-center justify-center md:hidden">
          <button onClick={() => handleMenu()} className={`${showMenu == false ? '' : 'border-4'}  border-1 border-gray-900 text-gray-900 px-4 py-2 rounded-xl `}><LuMenu /></button>
        </div>
      </div>
      <ul className={`${showMenu == false ? 'hidden h-0 md:h-full md:opacity-100 ' : ' h-40'} md:flex flex gap-4  mt-2 flex-col  md:flex-row md:gap-6 md:justify-center duration-1000  ease-in-out  bg-gray-700 px-2`}>
        <li><NavLink className='custom-btn ' to={'/startFramework/about'}>About</NavLink></li>
        <li><NavLink className='custom-btn ' to={'/startFramework/portfolio'}>Portfolio</NavLink></li>
        <li><NavLink className='custom-btn' to={'/startFramework/contact'}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
