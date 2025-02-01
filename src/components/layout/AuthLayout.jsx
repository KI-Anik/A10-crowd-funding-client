import Footer from '../Footer';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='container mx-auto  '>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-308px)] pt-4 pb-5 bg-base-200">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;