// components/Navbar.js
"use client";
import React from 'react';
import { BsBook, BsLinkedin, BsGithub, BsFileEarmarkPdfFill, BsFillHouseDoorFill, BsMailbox2Flag } from 'react-icons/bs';
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
            <nav className="hidden lg:flex shadow-md  py-10 mb-12 px-4 ">
                <span className="justify-start mx-3">
                    <h1 className="font-custom text-xl">Grant Fonseca's Portfolio</h1>
                </span>
                <ul className="mx-2 w-screen">
                    <span className="ml-auto flex flex-row ">
                        <li><Link href="https://www.linkedin.com/in/grant-fonseca-5504b590/" target="_blank"> <BsLinkedin className="text-3xl mx-1" /></Link></li>
                        <li><Link href="https://github.com/xerox777" target="_blank"><BsGithub className="text-3xl mx-1" /> </Link></li>
                        <span className=' flex flex-row  ml-auto '>
                            <li><BsFillHouseDoorFill className="cursor-pointer text-3xl mx-1" />  </li>
                            {/* <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/">home</Link></li> */}
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/">Home</Link></li>
                            <li>< BsBook className="cursor-pointer text-3xl mx-1" />  </li>
                            {/* <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/">home</Link></li> */}
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/letters">Letters</Link></li>
                            <li><BsFileEarmarkPdfFill className="cursor-pointer text-3xl mx-1" />  </li>
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/resume">Resume</Link></li>
                            <li><BsMailbox2Flag className="cursor-pointer text-3xl mx-1" /></li>
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/contactme">Contact Me</Link></li>
                        </span>
                    </span>
                </ul>
            </nav>

            <nav className={`${menu ? 'min-h-screen' : 'min-h-12'} lg:hidden flex items-center justify-center  shadow-md py-10 mb-12 px-4 flex-col space-y-9 duration-300 ease-in-out transition-all`}>
                {menu ? (
                    <X size={25} onClick={toggleMenu} className="cursor-pointer absolute top-5 left-18" />
                ) : (
                    <Menu size={25} onClick={toggleMenu} className="cursor-pointer absolute top-5" />
                )}

                <ul className={` ${menu ? 'max-h-[90%] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'}
    overflow-hidden transition-all duration-500 ease-in-out items-center justify-center  h-[80%]
    lg:hidden flex flex-col absolute top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8
  `}>
                    <div className="flex flex-col w-full space-y-5">
                        <span><li><Link href="https://www.linkedin.com/in/grant-fonseca-5504b590/" target="_blank"> <BsLinkedin className="text-3xl mx-1" /></Link></li> </span>
                        <li><Link href="https://github.com/xerox777" target="_blank"><BsGithub className="text-3xl mx-1" /> </Link></li>
                        {/* <span className=' flex flex-row  ml-auto '> */}
                        <span className="flex"><li><BsFillHouseDoorFill className="cursor-pointer text-3xl mx-1" />  </li>
                            {/* <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/">home</Link></li> */}
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/">Home</Link></li></span>
                        <span className="flex"><li>< BsBook className="cursor-pointer text-3xl mx-1" />  </li>
                            {/* <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/">home</Link></li> */}
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/letters">Letters</Link></li></span>
                        <span className="flex"><li><BsFileEarmarkPdfFill className="cursor-pointer text-3xl mx-1" />  </li>
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/resume">Resume</Link></li></span>
                        <span className="flex"><li><BsMailbox2Flag className="cursor-pointer text-3xl mx-1" /></li>
                            <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/contactme">Contact Me</Link></li></span>
                        {/* </span> */}
                    </div>
                </ul>
            </nav>
        </div>
        //     </section>
        // </main >

    );
};
export default Navbar;