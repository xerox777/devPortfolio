"use client";
import React, { useRef } from 'react';
import Link from "next/link";
import { BsFillHouseDoorFill } from 'react-icons/bs';
import Card from '../components/card';
import Navbar from '../components/navbar';

function Letters() {
    const form = useRef();

    const recommendation_letters = [
        {
            title: '23AndMe Letter',
            description:'From Patrick, the head of the security team.',
            media:'patrick_ltr.jpg',
            link: ''
        },
        {
            title: 'Sonoma State University professor letter',
            description:'From Dr. Gondree, my college professor.',
            media:'gondree_ltr.jpg',
            link: ''
        }, 
        {
            title: 'Orgchart Now',
            description:'From Jeremy Finch, Software Engineering Manager',
            media:'jeremyFinch_lttr.jpg',
            link: ''
        }
    ];
    return (
        <main className="bg-white px-10">
            <section className="min-h-screen  ">
                <Navbar />
                <h1 className='text-3xl mx-auto px-7 my-10'>Letters of Recommendation</h1>
                <div className="flex flex-col lg:flex-row justify-around space-y-5 mb-5" >
                    {recommendation_letters.map((job, idx) => (
                        <Card key={idx}  {...job} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Letters;
// test