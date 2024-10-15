"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Oleo_Script } from 'next/font/google';

const oleoScript = Oleo_Script({
    subsets: ['latin'],
    weight: '400',
});

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50 flex justify-between items-center py-3 px-11 shadow-lg mb-2 customGray transparentGray'>
                <div className={`${oleoScript.className} text-2xl`}>
                    Miguel
                </div>
                <div className='hidden md:flex justify-center flex-grow text-white'>
                    <div className='flex space-x-6'>
                        <span className='mx-3 px-4 cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#presentation">Home</a></span>
                        <span className='mx-3 px-4 cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#aboutMe">About Me</a></span>
                        <span className='mx-3 px-4 cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#skills">Skills</a></span>
                        <span className='mx-3 px-4 cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#projects">Projects</a></span>
                        <span className='mx-3 px-4 cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#getInTouch">Contact me</a></span>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='transition duration-500 ease-in-out text-white'>
                        <Menu />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div
                    className="fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-50 transition-opacity duration-5000 ease-in-out"
                    onClick={toggleMenu}
                >
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-gray-950 text-white p-5 transition-transform duration-5000 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={toggleMenu} className="absolute top-5 right-5 text-2xl">
                            <X />
                        </button>

                        <h2 className='text-xl mb-4'>Menu</h2>
                        <ul className='space-y-4'>
                            <li className='cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#presentation">Home</a></li>
                            <li className='cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#aboutMe">About me</a></li>
                            <li className='cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#skills">Skills</a></li>
                            <li className='cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#projects">Projects</a></li>
                            <li className='cursor-pointer active:text-green-700 transition duration-100 ease-in-out'><a href="#getInTouch">Contact me</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
