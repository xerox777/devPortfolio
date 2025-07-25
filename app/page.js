import Image from "next/image";
import  {BsCloudMoonFill, BsFileEarmarkPdfFill}  from 'react-icons/bs';
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (

    // <html>
    <div>
      <Head>
        <title>Grant Fonseca Portfolio</title>
        <meta name="description" content="Writen by Grant Fonseca" />
        <link rel="icon" src="./favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="font-custom text-xl">developed by Grant</h1>
            <ul className="flex items-center">
            <li><BsFileEarmarkPdfFill className="cursor-pointer text-3xl"/>  </li>
            <li><Link className="bg-gradient-to-r from-green-500 to-sky-500 text-white rounded px-4 py-2 ml-8  " href="/resume">Resume</Link></li>
            </ul>
          </nav>
            <h1 className="text-3xl text-teal-500">Grant Fonseca's Portfolio</h1>
        </section>
      </main>
    </div>
    // </html>
  );
}
