import React from 'react';
import NavbarLinks from './NavbarLinks';

function Navbar() {
    return (
        <>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar">
                        {/* DROP DOWN MENU WHEN SCREEN IS SMALL */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavbarLinks />
                            </ul>
                        </div>
                        {/* LOGO */}
                        <a className="btn btn-ghost text-xl">Luxcraft</a>
                    </div>
                    {/* NORMAL MENU WHEN SCREEN IS LARGE */}
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="navbar">
                            <NavbarLinks />
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;
