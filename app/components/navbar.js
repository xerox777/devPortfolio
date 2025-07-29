// components/Navbar.js
"use client";
import React from 'react';
import { BsBook, BsLinkedin, BsGithub, BsFileEarmarkPdfFill, BsFillHouseDoorFill, BsMailbox2Flag } from 'react-icons/bs';
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="shadow-md  py-10 mb-12 flex  px-4 ">
            <span className="justify-start mx-3">
                <h1 className="font-custom text-xl">Grant Fonseca's Portfolio</h1>
            </span>
            <ul className="mx-2">
                <li><Link href="https://www.linkedin.com/in/grant-fonseca-5504b590/" target="_blank"> <BsLinkedin className="text-3xl mx-1" /></Link></li>

            </ul>
            <ul className="mx-2">
                <li><Link href="https://github.com/xerox777" target="_blank"><BsGithub className="text-3xl mx-1" /> </Link></li>
            </ul>
            <span className="ml-auto flex flex-row justify-between">
                <ul className="flex items-center mx-3">
                    <li><BsFillHouseDoorFill className="cursor-pointer text-3xl mx-1" />  </li>
                    {/* <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/">home</Link></li> */}
                    <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/">Home</Link></li>
                </ul>
                <ul className="flex items-center mx-3">
                    <li>< BsBook className="cursor-pointer text-3xl mx-1" />  </li>
                    {/* <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/">home</Link></li> */}
                    <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/letters">Letters</Link></li>
                </ul>
                <ul className="flex items-center mx-3">
                    <li><BsFileEarmarkPdfFill className="cursor-pointer text-3xl mx-1" />  </li>
                    <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/resume">Resume</Link></li>
                </ul>
                <ul className="flex items-center mx-3">
                    <li><BsMailbox2Flag className="cursor-pointer text-3xl mx-1" /></li>
                    <li><Link className="relative inline-block text-black text-2xl after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="/contactme">Contact Me</Link></li>
                </ul>
            </span>
        </nav>
        //     </section>
        // </main >

    );
};
export default Navbar;