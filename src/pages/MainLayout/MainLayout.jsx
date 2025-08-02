import { Outlet } from 'react-router-dom';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';
import { useEffect, useState } from 'react';


export default function MainLayout() {
    // state to toggle the mobile menu
    const [showMenu, setShowMenu] = useState(false);

    // event listener to close the mobile menu when the user scrolls
    useEffect(() => {
        const handleCloseNav = () => setShowMenu(false);
        window.addEventListener('scroll', handleCloseNav)

        // clean up
        return () => window.removeEventListener('scroll', handleCloseNav)
    }, [])


    return (
        <div className='text-white'>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <Outlet />
            <Footer />
        </div>
    )
}
