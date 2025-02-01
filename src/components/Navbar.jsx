import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/AllCamp'}>All Campaign</NavLink></li>
    <li><NavLink to={'/addNewCamp'}>Add New Campaign</NavLink></li>
    <li><NavLink to={'/myCamp'}>My Campaign</NavLink></li>
    <li><NavLink to={'/myDonation'}>My Donations</NavLink></li>
    </>
    return (
        <div className="navbar flex-col sm:flex-row bg-base-100 shadow-sm m-5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Crowd Funding</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button><Link to={'/auth/login'} className="btn">Log in</Link></button>
                <button><Link to={'/auth/register'} className="btn">Register</Link></button>
            </div>
        </div>
    );
};

export default Navbar;