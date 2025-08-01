import { Outlet } from 'react-router-dom'
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import Container from '../../components/Container/Container';


export default function MainLayout() {
    return (
        <div className='text-white'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
