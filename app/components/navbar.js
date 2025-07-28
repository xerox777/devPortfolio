// components/Navbar.js
"use client";
import React from 'react';
import { BsCloudMoonFill, BsFileEarmarkPdfFill, BsFillHouseDoorFill, BsMailbox2Flag } from 'react-icons/bs';
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="shadow-md  py-10 mb-12 flex justify-between px-4 ">
            <h1 className="font-custom text-xl">developed by Grant</h1>

            <ul className="flex items-center">
                <li><BsFillHouseDoorFill className="cursor-pointer text-3xl  " />  </li>
                <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/">home</Link></li>
            </ul>
            <ul className="flex items-center">
                <li><BsFileEarmarkPdfFill className="cursor-pointer text-3xl" />  </li>
                <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/resume">Resume</Link></li>
            </ul>
            <ul className="flex items-center">
                <li><BsMailbox2Flag className="cursor-pointer text-3xl" /></li>
                <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/contactme">Contact Me</Link></li>
            </ul>
        </nav>
        //     </section>
        // </main >

    );
};
export default Navbar;