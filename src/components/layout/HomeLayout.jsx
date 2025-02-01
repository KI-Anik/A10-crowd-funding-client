import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-290px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;