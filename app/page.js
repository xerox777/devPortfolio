import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from 'react';
import Navbar from './components/navbar';
export default function Home() {
  return (

    // <html>
    <main className="bg-white px-10">
      <section className="min-h-screen  ">
        <div>
          <Head>
            <title>Grant Fonseca Portfolio</title>
            <meta name="description" content="Writen by Grant Fonseca" />
            <link rel="icon" src="./favicon.ico" />
          </Head>
          <Navbar />
          {/* <h1 className="text-3xl text-teal-500">Grant Fonseca's Portfolio</h1> */}
        </div>
      </section>
    </main>
    // </html>
  );
}
