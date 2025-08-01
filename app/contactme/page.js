"use client";
import React, { useRef } from 'react';
import Link from "next/link";
import { BsFillHouseDoorFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';

import Navbar from '../components/navbar';
function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const sendtoMe = emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_EMAILME_TEMP_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        const sendtoUser = emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        Promise.all([sendtoMe, sendtoUser])
            .then(() => {
                alert("✅ Message sent!");
                form.current.reset(); // ✅ reset *after* both are done
            })
            .catch((err) => {
                console.error("❌ Failed to send message(s):", err);
                alert("❌ Error sending one or both messages.");
            });
    };

    return (
        <main className="bg-white px-10">
            <section className="min-h-screen  ">
                <div className="" >
                    <Navbar />

                    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl my-4">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Grant</h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-5" >
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="to_email"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactForm;
// test