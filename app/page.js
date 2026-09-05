"use client";
import Image from "next/image";
import Head from "next/head";
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Article from './components/article';
import Card from './components/card';
import ProjectCard from './components/projectCard';
import {
  BsRobot,
  BsAwardFill,
} from 'react-icons/bs';

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

  const projectExperience = [
    {
      icon: BsRobot,
      title: 'AI Agent Tool Server (MCP)',
      tagline: "Model Context Protocol server exposing AI-agent tools to the department's FME automation platform",
      description: "Built a Model Context Protocol (MCP) server exposing custom AI-agent tools — automated email drafting/sending and an intelligent multi-attendee meeting scheduler that infers attendees' working hours from calendar history via Outlook COM automation — over Streamable HTTP so the department's FME ETL platform can invoke LLM-driven automation as native pipeline steps.",
      images: [],
      mechanics: [
        "Runs a FastMCP server over Streamable HTTP so any MCP-compatible host (like FME's MCP Caller) can discover and invoke tools as regular pipeline steps, with no custom client required.",
        'Exposes send_outlook_email and create_meeting tools that drive the Windows Outlook COM API from a background STA thread, keeping each MCP request non-blocking so callers never hit a timeout waiting on desktop automation.',
        "create_meeting infers each attendee's real working hours by pulling 14 days of calendar history via GetSharedDefaultFolder, computing the median start/end time per person, then intersecting every attendee's window to find the first mutually free slot.",
        'Automatically finds an open local port and writes full request/response tracing to a debug log for troubleshooting COM automation issues in production.',
      ],
      impact: [
        'Turns Outlook scheduling — normally manual back-and-forth — into a single natural-language request an LLM agent can fulfill end-to-end.',
        "Gives the department's FME ETL pipelines a way to trigger AI-driven actions as native steps, without bespoke integration code per workflow.",
        'Establishes a reusable pattern (MCP server + COM automation) for exposing desktop-bound enterprise tools to LLM agents going forward.',
      ],
      stack: ['Python', 'Model Context Protocol', 'FastMCP', 'Streamable HTTP', 'Outlook COM Automation', 'Threading'],
    },
    {
      title: 'Downstream Asset Impact Analyzer',
      tagline: 'Graph-based tool that ranks utility assets by cascading downstream impact',
      description: 'C#/Python web app powered by a Union-Find (disjoint-set, union-by-rank with path compression) graph engine that ranks utility assets by direct/indirect downstream dependency count, surfacing the highest-impact assets before field crews perform replacements.',
      images: ['/unionfind_frontend.png', '/unionfind_datastructure.png'],
      mechanics: [
        'Implements a Union-Find (disjoint-set) data structure from scratch in Python, using union-by-rank and path compression so find() operations run in near-constant time even on large asset graphs.',
        'A C# ASP.NET Core front end collects a user-defined asset graph and posts it to an API, which shells out to the Python engine and streams the JSON result back.',
        'The engine unions every asset with its direct dependencies, then groups all assets sharing a root into connected components — each component represents everything that would be affected if one asset in it failed.',
        'Users can filter by asset type and request the top-K highest-impact components, so field teams see which assets have the largest blast radius before scheduling replacement work.',
      ],
      impact: [
        "Surfaces hidden dependency chains that aren't obvious from a flat asset list, so crews can prioritize replacements that would otherwise cause the most downstream service disruption.",
        'Replaces manual, error-prone tracing of asset dependency chains with an instant, repeatable graph computation.',
        'Generalizes to any asset type via a user-configurable schema, so the same tool covers multiple asset categories.',
      ],
      stack: ['C#', 'ASP.NET Core', 'Python', 'Union-Find / Disjoint-Set', 'Graph Algorithms', 'REST API'],
    },
    {
      title: 'Work Order Route Optimizer',
      tagline: 'Route-optimization API that plans the fastest multi-stop path across open work orders',
      description: 'ASP.NET Core + Python API combining Dijkstra shortest-path search with TSP heuristics (nearest-neighbor construction plus 2-opt refinement) over OSMnx/NetworkX road-network graphs, generating optimized multi-stop routes and one-click Google Maps links for field technicians.',
      images: ['/shortest_wo_path_webapp.png', '/shortest_wo_path_route.png'],
      mechanics: [
        'An ASP.NET Core API accepts a starting address and a set of work order IDs (or a filter by assignee), then delegates the routing math to a Python script.',
        'The Python side geocodes the start location, pulls work order coordinates from the Cityworks database, and builds a weighted distance graph — using real street-network distances via OSMnx/NetworkX when available, or geodesic distance as a fallback.',
        "Computes pairwise shortest paths with Dijkstra's algorithm, then solves the multi-stop ordering as a Traveling Salesman Problem: a nearest-neighbor heuristic builds an initial route, then 2-opt edge-swapping refines it — with an exact brute-force option for small routes.",
        'Returns the optimized stop order, total distance, and a ready-to-use Google Maps link, which the .NET API relays straight back to the browser.',
      ],
      impact: [
        'Cuts windshield time for field technicians by replacing ad-hoc, gut-feel routing with a mathematically optimized multi-stop path.',
        'One click produces a Google Maps link the crew can open immediately — no manual re-plotting of addresses.',
        'Scales from quick heuristic routing for large work-order batches to exact optimal routing for small, high-priority batches.',
      ],
      stack: ['C#', 'ASP.NET Core', 'Python', "Dijkstra's Algorithm", 'TSP Heuristics (2-opt)', 'OSMnx', 'NetworkX', 'geopy'],
    },
    {
      title: 'CIS/Cityworks Integration Support Tool',
      tagline: 'Internal support console for diagnosing and repairing failed CIS/Cityworks integration transactions',
      description: 'Full-stack C#/Python web app enabling bi-directional data transfer between the CIS and Cityworks asset management platforms — SQLite-based transaction parsing, subprocess-isolated Python execution, and automated meter/service-order reprocessing.',
      images: ['/cis_cw_success.png', '/cis_cw_transactions.png'],
      mechanics: [
        'A C# ASP.NET MVC front end lets support staff upload the SQLite staging database produced by the nightly integration job and browse it directly in the browser.',
        'Staff enter a work order number; the app looks up the matching staging row and calls a Python subprocess that replays the specific CIS or Cityworks API action (e.g. Add Meter Line, Close Service Order) tied to that record.',
        'Every API call is wrapped so both the successful response and the full error trace are captured and shown in the UI, instead of a support engineer trawling raw log files.',
        'Designed to support recursive unexpiring of dependent asset chains (Meter → MXU → Register) so a single failed integration does not require untangling each downstream asset by hand.',
      ],
      impact: [
        'Turns a multi-step, log-diving diagnostic process into a point-and-click workflow non-developers on the team can use.',
        'Shrinks mean time to resolution for stuck integration transactions from a developer-only investigation to a self-service fix.',
        'Captures structured error detail per transaction, building an audit trail for recurring integration failure patterns.',
      ],
      stack: ['C#', 'ASP.NET MVC', 'Python', 'SQLite', 'REST APIs', 'Process/IPC Orchestration'],
    },
    {
      icon: BsAwardFill,
      title: 'Kudos of the Month',
      tagline: 'Employee recognition web app for nominating and tracking monthly Kudos',
      description: 'C#/.NET MVC employee-recognition web app with a generic authenticated API-proxy layer for secure cross-origin service calls.',
      images: [],
      mechanics: [
        'C#/.NET MVC application backed by a SQL database of employee records, rendering a nomination and recognition view for staff.',
        'Includes a generic authenticated API-proxy endpoint (GET/POST) that forwards requests to external services, so the front end can call outside APIs without exposing credentials or hitting browser CORS restrictions.',
      ],
      impact: [
        'Gives the department a lightweight, self-hosted way to run employee recognition instead of a manual, email-based nomination process.',
        'The proxy pattern it introduced became a reusable building block for other internal tools that need to safely call external APIs from the browser.',
      ],
      stack: ['C#', '.NET MVC', 'SQL', 'REST API Proxy Pattern'],
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
              <a
                href="#project-experience"
                className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Projects
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

      {/* ── Project Experience ─────────────────────────────── */}
      <section id="project-experience" className="py-16 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-4 scroll-reveal">Project Experience</h2>
        <p className="text-text-secondary mb-12 max-w-3xl scroll-reveal">
          Internal tools designed and built while at the City of Santa Rosa — covering AI-agent automation,
          graph algorithms, and enterprise systems integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectExperience.map((project, idx) => (
            <div key={idx} className="scroll-reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
              <ProjectCard project={project} />
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

    </main>
  );
}
