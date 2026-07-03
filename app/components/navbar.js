// components/Navbar.js
"use client";
import React from 'react';
import { BsBook, BsLinkedin, BsGithub, BsFileEarmarkPdfFill, BsFillHouseDoorFill, BsMailbox2Flag, BsGrid } from 'react-icons/bs';
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div>
            <nav className="hidden lg:flex shadow-lg py-6 mb-12 px-6 bg-gradient-to-r from-secondary to-primary border-b border-border items-center justify-between">
                <span className="justify-start">
                    <h1 className="font-custom text-xl font-bold text-text-primary">Grant Fonseca</h1>
                </span>
                <ul className="flex-1 flex justify-center list-none">
                    <span className='flex flex-row gap-6 items-center'>
                        <li className="list-none">
                            <Link href="/" className="flex items-center gap-2 relative inline-block group">
                                <BsFillHouseDoorFill className="text-2xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                <span className="text-text-primary text-base font-medium">Home</span>
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left"></span>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="/#services" className="flex items-center gap-2 relative group">
                                <BsGrid className="text-2xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                <span className="text-text-primary text-base font-medium">Services</span>
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left"></span>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="/letters" className="flex items-center gap-2 relative inline-block group">
                                <BsBook className="text-2xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                <span className="text-text-primary text-base font-medium">Letters</span>
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left"></span>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="/resume" className="flex items-center gap-2 relative inline-block group">
                                <BsFileEarmarkPdfFill className="text-2xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                <span className="text-text-primary text-base font-medium">Resume</span>
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left"></span>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="/contactme" className="flex items-center gap-2 relative inline-block group">
                                <BsMailbox2Flag className="text-2xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                <span className="text-text-primary text-base font-medium">Contact</span>
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left"></span>
                            </Link>
                        </li>
                    </span>
                </ul>
                <span className="flex flex-row gap-8 items-center list-none">
                    <li className="list-none"><Link href="https://www.linkedin.com/in/grant-fonseca-5504b590/" target="_blank" className="relative inline-block group"> <BsLinkedin className="text-2xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link></li>
                    <li><Link href="https://github.com/xerox777" target="_blank" className="relative inline-block group"><BsGithub className="text-2xl text-text-primary group-hover:text-accent transition-colors duration-300" /><span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span> </Link></li>
                </span>
            </nav>

            <nav className={`${menu ? 'min-h-screen' : 'min-h-12'} lg:hidden flex items-center justify-center shadow-lg py-6 mb-12 px-4 flex-col space-y-9 duration-300 ease-in-out transition-all bg-gradient-to-r from-secondary to-primary border-b border-border `} style={{
                paddingBottom: '3rem', // React style uses camelCase, no !important
                cursor: 'auto',
            }}>
                {menu ? (
                    <X size={25} onClick={toggleMenu} className="cursor-pointer absolute top-5 left-18 text-text-primary hover:text-accent transition-colors" />
                ) : (
                    <Menu size={25} onClick={toggleMenu} className="cursor-pointer absolute top-5 text-text-primary hover:text-accent transition-colors" />
                )}

                <ul className={` ${menu ? 'max-h-[90%] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'}
    overflow-hidden transition-all duration-500 ease-in-out items-center justify-center  h-[80%]
    lg:hidden flex flex-col absolute top-16 font-semibold text-base text-center pt-8 pb-4 gap-6
  `}>
                    <div className="flex flex-col w-full space-y-4">
                        <span className="flex mx-3"><li><Link href="https://www.linkedin.com/in/grant-fonseca-5504b590/" target="_blank" className="relative inline-block group"> <BsLinkedin className="text-2xl mx-1 text-text-primary group-hover:text-accent transition-colors duration-300" /><span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span></Link></li> </span>
                        <span className="flex mx-3"><li><Link href="https://github.com/xerox777" target="_blank" className="relative inline-block group"><BsGithub className="text-2xl mx-1 text-text-primary group-hover:text-accent transition-colors duration-300" /><span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span> </Link></li></span>
                        <span className="flex mx-3 gap-3 items-center justify-center">
                            <Link href="/" className="flex items-center gap-2 text-text-primary font-medium relative group">
                                <BsFillHouseDoorFill className="text-xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                Home
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left" />
                            </Link>
                        </span>
                        <span className="flex mx-3 gap-3 items-center justify-center">
                            <Link href="/#services" className="flex items-center gap-2 text-text-primary font-medium relative group">
                                <BsGrid className="text-xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                Services
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left" />
                            </Link>
                        </span>
                        <span className="flex mx-3 gap-3 items-center justify-center">
                            <Link href="/letters" className="flex items-center gap-2 text-text-primary font-medium relative group">
                                <BsBook className="text-xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                Letters
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left" />
                            </Link>
                        </span>
                        <span className="flex mx-3 gap-3 items-center justify-center">
                            <Link href="/resume" className="flex items-center gap-2 text-text-primary font-medium relative group">
                                <BsFileEarmarkPdfFill className="text-xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                Resume
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left" />
                            </Link>
                        </span>
                        <span className="flex mx-3 gap-3 items-center justify-center">
                            <Link href="/contactme" className="flex items-center gap-2 text-text-primary font-medium relative group">
                                <BsMailbox2Flag className="text-xl text-text-primary group-hover:text-accent transition-colors duration-300" />
                                Contact
                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 origin-left" />
                            </Link>
                        </span>
                    </div>
                </ul>
            </nav>
        </div>

    );
};
export default Navbar;
