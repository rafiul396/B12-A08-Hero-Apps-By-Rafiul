import React, { useState } from 'react';
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router';
import { GitBranch, Menu, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Container from '../../layout/Container';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="shadow-sm bg-base-100 relative z-50 text-black">
            <Container className=''>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="mr-4">
                            <span onClick={() => setOpen(e => !e)} className='md:hidden'>
                                {open ? <X /> : <Menu />}
                            </span>

                        </div>
                        <ul className={`absolute duration-500 -z-10 ${open ? 'top-16' : '-top-40'} right-0 md:hidden bg-transparent w-full text-center text-xl space-y-2 p-2`}>
                            <li>
                                <NavLink onClick={() => setOpen(e => !e)} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setOpen(e => !e)} to='/apps'>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setOpen(e => !e)} to='/installation'>Installation</NavLink>
                            </li>
                        </ul>

                        <a className="flex items-center gap-2 text-xl cursor-pointer" href='/'><img className='w-[45px]' src={logo} alt="logo of bdsoft.io" /><span className='font-semibold gradient-text'  >BDSOFT.IO</span></a>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="gap-10 menu-horizontal px-1 font-semibold">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/apps'>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink to='/installation'>Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn gradient-bg text-white"><span className='text-lg'><FaGithub /></span>  Contribute</a>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Navbar;