"use client";
import Image from "next/image";
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Article from './components/article';
import Card from './components/card';
import { X } from 'lucide-react';
import {
  BsRobot,
  BsCodeSlash,
  BsDatabase,
  BsShieldCheck,
  BsCalendarEvent,
} from 'react-icons/bs';

export default function Home() {
  const [showBooking, setShowBooking] = useState(false);

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

  const services = [
    {
      icon: BsRobot,
      title: 'AI Integration & Automation',
      description: 'Build intelligent AI-powered tools and workflows that save time and scale your business. From custom LLM integrations and chatbots to fully automated content and data pipelines.',
      tags: ['LLM APIs', 'Claude / OpenAI', 'Python', 'Automation', 'Agentic Workflows'],
      highlight: true,
    },
    {
      icon: BsCodeSlash,
      title: 'Full-Stack Development',
      description: 'Custom web applications built for performance and longevity. Polished React/Next.js frontends paired with robust backends in Ruby on Rails or Python.',
      tags: ['React', 'Next.js', 'Ruby on Rails', 'Python', 'PostgreSQL'],
    },
    {
      icon: BsDatabase,
      title: 'Data Engineering & Pipelines',
      description: 'Design and build reliable data integration systems, ETL pipelines, and API connectors that turn scattered raw data into actionable business insight.',
      tags: ['Python', 'ETL / ELT', 'REST APIs', 'GIS', 'PostgreSQL'],
    },
    {
      icon: BsShieldCheck,
      title: 'Security Engineering',
      description: 'Harden your systems with security reviews, custom monitoring tools, and honeypot setups. Protect your infrastructure before incidents happen.',
      tags: ['AWS Security', 'Honeypots', 'Network Analysis', 'Python', 'Incident Response'],
    },
  ];

  useEffect(() => {
    // Scroll-reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const companies = [{ name: '23andMe', logo: '/23andme-logo.svg', url: 'https://23andme.com' },
  { name: 'OrgChart Now', logo: '/orgchart-logo.png', url: 'https://theorgchart.com' },
  { name: 'Crosscheck', logo: '/cross-check.webp', url: 'https://www.cross-check.com' },
  { name: 'Valorx', logo: '/valorx-logo.svg', url: 'https://valorx.com' },
  { name: 'City of Santa Rosa', logo: '/santa-rosa-logo.png', url: 'https://srcity.org' }];
  const loopedcompanies = [...companies, ...companies];
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      <Head>
        <title>Grant Fonseca Portfolio</title>
        <meta name="description" content="Written by Grant Fonseca" />
        <link rel="icon" src="./favicon.ico" />
      </Head>
      <Navbar />

      {/* ── Hero Section ───────────────────────────────────── */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="hero-fade-in delay-100 text-5xl md:text-6xl font-bold text-text-primary mb-4">
              Grant Fonseca
            </h1>
            <p className="hero-fade-in delay-200 text-2xl md:text-3xl font-semibold text-accent mb-2">
              Full-Stack Software Engineer
            </p>
            <p className="hero-fade-in delay-300 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
              Building scalable solutions with Python, React, Ruby on Rails, and modern AI integrations.
              Passionate about solving complex problems and delivering business value through code.
            </p>
            <div className="hero-fade-in delay-400 flex gap-4 flex-wrap">
              <button
                onClick={() => setShowBooking(true)}
                className="pulse-glow flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <BsCalendarEvent className="text-lg" />
                Book a Free Call
              </button>
              <a
                href="/contactme"
                className="px-8 py-3 bg-secondary hover:bg-border border border-border hover:border-accent text-text-primary font-semibold rounded-lg transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center hero-fade-in-right delay-200">
            <div className="float-anim relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-border shadow-xl shadow-accent/20">
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

      {/* ── Company Carousel ───────────────────────────────── */}
      <section className="py-16 px-10 bg-secondary/50 backdrop-blur-sm border-t border-border overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center scroll-reveal">
            Companies I&apos;ve Worked With
          </h2>
          <div className="relative overflow-hidden h-40">
            <div className="carousel-scroll flex gap-12">
              {loopedcompanies.map((c, i) => (
                <a
                  key={`${c.name}-${i}`}   // <- guaranteed unique
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-32 group"
                >
                  <div className="h-full bg-gradient-to-br from-secondary to-primary border border-border rounded-xl p-6 flex flex-col items-center justify-center hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer">
                    <div className="relative w-24 h-20 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Image src={c.logo} alt={c.name} fill className="object-contain" />
                    </div>
                    <p className="text-text-primary font-semibold text-center text-sm group-hover:text-accent transition-colors duration-300">
                      {c.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ───────────────────────────────── */}
      <section id="services" className="py-20 px-10 max-w-6xl mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20 mb-4">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Services</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From AI-powered automation to full-stack development and security engineering — I build
            solutions that move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="service-card scroll-reveal relative group bg-gradient-to-br from-secondary to-primary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {service.highlight && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 bg-accent text-primary text-xs font-bold rounded-full tracking-wide">
                    AI Services
                  </span>
                )}
                {/* subtle top-right glow blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 flex-shrink-0">
                    <Icon className="text-2xl text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mt-2 leading-snug">{service.title}</h3>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/60 border border-border rounded-full text-text-secondary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14 scroll-reveal">
          <p className="text-text-secondary mb-6 text-lg">
            Not sure what you need? Let&apos;s figure it out together.
          </p>
          <button
            onClick={() => setShowBooking(true)}
            className="pulse-glow inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-light text-primary font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <BsCalendarEvent className="text-xl" />
            Book a Free 20-Min Call
          </button>
        </div>
      </section>

      {/* ── Work Experience ────────────────────────────────── */}
      <section className="py-16 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-12 scroll-reveal">Experience</h2>
        <div className="space-y-6">
          {workExperience.map((job, idx) => (
            <div key={idx} className="scroll-reveal" style={{ transitionDelay: `${idx * 60}ms` }}>
              <Article {...job} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────── */}
      <section id="projects" className="py-16 px-10 bg-secondary/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-12 scroll-reveal">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workCards.map((card, idx) => (
              <div key={idx} className="scroll-reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA Banner ─────────────────────────────── */}
      <section className="py-24 px-10 border-t border-border bg-gradient-to-br from-accent/5 via-secondary to-primary">
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20 mb-6">
            Free Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Ready to Work Together?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 20-minute video call and let&apos;s talk about how I can help bring your idea to
            life — whether it&apos;s an AI integration, a new web app, or something in between.
          </p>
          <button
            onClick={() => setShowBooking(true)}
            className="pulse-glow inline-flex items-center gap-3 px-12 py-5 bg-accent hover:bg-accent-light text-primary font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-xl"
          >
            <BsCalendarEvent className="text-2xl" />
            Schedule Your Free Call
          </button>
          <p className="text-text-secondary text-sm mt-5 opacity-70">
            No commitment. No pressure. Just a conversation.
          </p>
        </div>
      </section>

      {/* ── Booking Modal (Calendly) ───────────────────────── */}
      {showBooking && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setShowBooking(false)}
        >
          <div
            className="bg-secondary border border-border rounded-2xl shadow-2xl shadow-accent/20 w-full max-w-xl flex flex-col overflow-hidden"
            style={{ maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-gradient-to-r from-secondary to-primary flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <BsCalendarEvent className="text-accent text-lg" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary leading-tight">Book a Free 30-Min Video Call</h3>
                  <p className="text-text-secondary text-xs mt-0.5">No commitment — just a conversation.</p>
                </div>
              </div>
              <button
                onClick={() => setShowBooking(false)}
                className="text-text-secondary hover:text-text-primary transition-colors p-1.5 hover:bg-border rounded-lg flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Calendly iframe */}
            <div className="flex-1 min-h-0 overflow-hidden">
              <iframe
                src="https://calendly.com/grantfonseca/30min?hide_gdpr_banner=1&background_color=0f172a&text_color=f1f5f9&primary_color=3b82f6"
                title="Book a free call with Grant Fonseca"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block', minHeight: '520px' }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
