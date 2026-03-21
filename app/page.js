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
      media: 'pulse_consult_booking_page.png',
      title: 'Pulse Consult',
      description: 'Full-Stack app built using Ruby on Rails, Postgresql, Docker, and Tailwind CSS. The app is a booking platform.',
      link: 'https://www.pulseconsultme.com/'
    },
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
      link: 'https://github.com/xerox777/SeniorResearch'
    },
    {
      media: 'feed.png',
      title: 'Android App School Project',
      description: 'Security camera application that connected to a raspberry pi hosted webcam through a private twitch url I designed and developed in a school project.',
      link: 'https://github.com/xerox777/EYASS-SECURITY-ANDROID-APP'
    },
    {
      media: 'recursivePortfolio.png',
      title: 'Professional Portfolio',
      description: 'Portfolio web-app built using Next.js, React, Tailwind css.',
      link: 'https://github.com/xerox777/devPortfolio'
    }

  ];
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      <Head>
        <title>Grant Fonseca Portfolio</title>
        <meta name="description" content="Written by Grant Fonseca" />
        <link rel="icon" src="./favicon.ico" />
      </Head>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-4">
              Grant Fonseca
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-accent mb-2">
              Full-Stack Software Engineer
            </p>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
              Building scalable solutions with Python, React, Ruby on Rails, and modern web technologies.
              Passionate about solving complex problems and delivering business value through code.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/contactme" className="px-8 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </a>
              <a href="#projects" className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300">
                View Work
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-border shadow-xl shadow-accent/20">
              <Image
                src="/Grant-profesh.jpg"
                alt="Grant Fonseca"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Carousel Section */}
      <section className="py-16 px-10 bg-secondary/50 backdrop-blur-sm border-t border-border overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
            Companies I've Worked With
          </h2>
          <div className="relative overflow-hidden h-40">
            <div className="carousel-scroll flex gap-12">
              {[
                { name: '23andMe', logo: '/23andme-logo.svg', url: 'https://23andme.com' },
                { name: 'OrgChart Now', logo: '/orgchart-logo.png', url: 'https://theorgchart.com' },
                { name: 'Crosscheck', logo: '/cross-check.webp', url: 'https://www.cross-check.com' },
                { name: 'Valorx', logo: '/valorx-logo.svg', url: 'https://valorx.com' },
                { name: 'City of Santa Rosa', logo: '/santa-rosa-logo.png', url: 'https://srcity.org' }
              ].map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-32 group"
                >
                  <div className="h-full bg-gradient-to-br from-secondary to-primary border border-border rounded-xl p-6 flex flex-col items-center justify-center hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer">
                    <div className="relative w-24 h-20 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-text-primary font-semibold text-center text-sm group-hover:text-accent transition-colors duration-300">
                      {company.name}
                    </p>
                  </div>
                </a>
              ))}
              {[
                { name: '23andMe', logo: '/23andme-logo.svg', url: 'https://23andme.com' },
                { name: 'OrgChart Now', logo: '/orgchart-logo.png', url: 'https://orgchart.today' },
                { name: 'Crosscheck', logo: '/cross-check.webp', url: 'https://crosscheckme.com' },
                { name: 'Valorx', logo: '/valorx-logo.svg', url: 'https://valorx.com' }
              ].map((company) => (
                <a
                  key={`${company.name}-duplicate`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-32 group"
                >
                  <div className="h-full bg-gradient-to-br from-secondary to-primary border border-border rounded-xl p-6 flex flex-col items-center justify-center hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer">
                    <div className="relative w-24 h-20 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-text-primary font-semibold text-center text-sm group-hover:text-accent transition-colors duration-300">
                      {company.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-12">
          Experience
        </h2>
        <div className="space-y-6">
          {workExperience.map((job, idx) => (
            <Article key={idx} {...job} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-10 bg-secondary/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {workCards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
