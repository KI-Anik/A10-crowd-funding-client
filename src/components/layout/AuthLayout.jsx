import Footer from '../Footer';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='container mx-auto flex flex-col min-h-screen '>
            <Navbar></Navbar>
            <div className="flex-1 flex items-center justify-center bg-base-200">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;