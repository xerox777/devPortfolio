"use client";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from 'react';
import Navbar from './components/navbar';
import Article from './components/article';
import Card from './components/card';

export default function Home() {
  const workExperience = [
    {
      title: 'Department Programmer Analyst',
      company: 'City of Santa Rosa | Water Department | Asset Management Team',
      date: 'Oct 2023 - Today',
      description: 'Created custom python program to continuously integrate data between two different asset management systems. Maintained, developed new features, and troubleshooted bugs in the existing code base for the integration.',
      skills: ['Python', 'fme', 'GIS', 'Postman', 'vim', 'github', 'data structures'],
    },
    {
      title: 'Full-Stack Software Engineer',
      company: 'Orgchart Now',
      date: 'Nov 2021 - May 2023',
      description: 'Engineered solutions to bugs on the back-end code base pertaining to different data connectors (SAP XML, Bamboo HR, etc.). Designed & developed new features in react and javascript.',
      skills: ['React', 'Python', 'JavaScript', 'Tailwindcss', 'Chrome Debugger'],
    },
    {
      title: 'Full-Stack Java Software Developer',
      company: 'Crosscheck, inc.',
      date: 'May 2021 - Nov 2021',
      description: 'Developed Java Web Application to interact with data stored on AS400 server. Designed UI with a responsive hierarchical chart to be expandable and contractable.',
      skills: ['Springboot', 'Java', 'Thymeleaf', 'CSS', 'HTML', 'JavaScript'],
    },
    {
      title: 'Co-Founder/Software Engineer',
      company: 'BGCIndustry',
      date: 'Nov 2020 - May 2021',
      description: 'Designed and developed minimum viable product (MVP) for a centralized hub of background checking websites. ',
      skills: ['Python', 'Flask', 'Heroku', 'BootStrap', 'JavaScript', 'CSS', 'HTML', 'Browser Automation', 'Web Scraping'],
    },
    {
      title: 'Security Software Engineer Intern',
      company: '23AndMe',
      date: 'May 2019 - Aug 2019',
      description: 'Created canary token/honeypot designed to notify security team when any attempts to authenticate with those credentials were made.',
      skills: ['AWS', 'PagerDuty', 'Slack', 'Python', 'Bash'],
    },
    {
      title: 'Security Software Engineer Intern',
      company: 'ISD, County of Sonoma',
      date: 'Jan 2019 - May 2019',
      description: 'Designed & Implemented a C++ program to analyze network traffic and determine which hosts were trustworthy based on frequency of activity in network logs. Built using 2-3 trees, and the results were compiled into a whitelist of IP addresses.',
      skills: ['C++', '2-3 Trees', 'Data Structures', 'Cyber Security', 'Security Incident Response Plan', 'Networking'],
    },
  ];
  const workCards = [
    {
      media: 'CrossCheckHome.mp4',
      title: 'CrossCheck Hub',
      description: 'Full-Stack app built using Java, Springboot, and Thymeleaf.',
      link: '/crosscheck_hub'
    },
    {
      media: 'fonseca_poster.jpg',
      title: 'Senior Research Project',
      description: 'I worked with my professor, Dr. Gondree, to develop a system of programmatically identifying when capture the flag events took place in a defcon CTF event.',
      link: ''
    },
    {
      media: 'feed.png',
      title: 'Android App School Project',
      description: 'Security camera application that connected to a raspberry pi hosted webcam through a private twitch url I designed and developed in a school project.',
      link: ''
    },
    {
      media: 'recursivePortfolio.png',
      title: 'Professional Portfolio',
      description: 'Portfolio web-app built using Next.js, React, Tailwind css.',
      link: 'https://github.com/xerox777/devPortfolio'
    }

  ];
  return (
    // <html>
    <main className="bg-white px-10">
        <div>
          <Head>
            <title>Grant Fonseca Portfolio</title>
            <meta name="description" content="Writen by Grant Fonseca" />
            <link rel="icon" src="./favicon.ico" />
          </Head>
          <Navbar />
          {/* <h1 className="text-3xl text-teal-500">Grant Fonseca's Portfolio</h1> */}
          {workExperience.map((job, idx) => (

            <Article key={idx} {...job} />
          ))}
          <section className='grid grid-cols-1 md:grid-cols-2 gap-20 w-screen mx-auto max-w-fit items-center '>
            {workCards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </section>
        </div>
    </main>
    // </html>
  );
}
