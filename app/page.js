"use client";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Cloud,
  ShieldCheck,
  Code2,
  ServerCog,
  BrainCircuit,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Menu,
  Sun,
  Moon,
  Globe2,
  Layers3,
  Building2,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    icon: ServerCog,
    title: "IT Management",
    text: "End-to-end technology operations, infrastructure supervision, systems optimization, and IT governance for growing organizations.",
  },
  {
    icon: Layers3,
    title: "IT Consulting",
    text: "Strategic advisory for digital transformation, enterprise systems, process improvement, and scalable technology planning.",
  },
  {
    icon: Code2,
    title: "Software Development",
    text: "Modern web platforms, mobile applications, dashboards, portals, APIs, and custom business software built for performance.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    text: "Cloud deployment, CI/CD pipelines, server management, monitoring, automation, and scalable cloud architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Security-first consulting, access control, risk assessment, data protection, compliance support, and secure system design.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    text: "AI-powered workflows, intelligent support systems, process automation, analytics, and productivity-enhancing solutions.",
  },
];

const industries = ["Finance", "Healthcare", "Education", "Real Estate", "E-commerce", "Nonprofits", "Startups", "Enterprise"];

const stats = [
  { value: "99.99%", label: "Cloud Reliability" },
  { value: "24/7", label: "IT Support" },
  { value: "150+", label: "Projects Scaled" },
  { value: "Enterprise", label: "Security Standards" },
];

const technologies = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "React",
  "Next.js",
  "Node.js",
  "DevOps",
  "AI Systems",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function IconovousHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const currentYear = 2026;
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-950"
      }`}
    >
      <div className="pointer-events-none fixed inset-0 z-30 opacity-30">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

{/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
  animate={{
    y: [0, -30, 0],
    x: [0, 20, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
/>

<motion.div
  animate={{
    y: [0, 25, 0],
    x: [0, -20, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-0 top-40 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[100px]"
/>

<motion.div
  animate={{
    y: [0, -20, 0],
    x: [0, 15, 0],
  }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[120px]"
/>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-ping rounded-full bg-cyan-300" />

        <div className="absolute right-[15%] top-[40%] h-3 w-3 animate-pulse rounded-full bg-blue-400" />

        <div className="absolute bottom-[20%] left-[25%] h-2 w-2 animate-bounce rounded-full bg-violet-400" />
    </div>

{/* ================= HEADER / NAVIGATION ================= */}
  {/* TOP ANNOUNCEMENT BAR */}

  {/* LIVE ENTERPRISE MARQUEE */}

<section className="relative z-10 overflow-hidden border-y border-cyan-400/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 backdrop-blur-xl">

  <div className="flex overflow-hidden py-4">

    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 18,
        ease: "linear",
      }}
      className="flex min-w-max items-center gap-16 whitespace-nowrap text-sm font-bold uppercase tracking-[0.25em] text-cyan-200"
    >

      <span>Enterprise IT Solutions</span>
      <span>Cloud Infrastructure</span>
      <span>AI Automation Systems</span>
      <span>Cybersecurity & Compliance</span>
      <span>24/7 Technical Support</span>
      <span>DevOps & Scalability</span>
      <span>Software Engineering Excellence</span>
      <span>Digital Transformation Experts</span>

      {/* DUPLICATE FOR INFINITE LOOP */}

      <span>Enterprise IT Solutions</span>
      <span>Cloud Infrastructure</span>
      <span>AI Automation Systems</span>
      <span>Cybersecurity & Compliance</span>
      <span>24/7 Technical Support</span>
      <span>DevOps & Scalability</span>
      <span>Software Engineering Excellence</span>
      <span>Digital Transformation Experts</span>

    </motion.div>

  </div>

</section>

{/* HEADER SECTION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link 
                href="/" 
                className="group transition duration-300">
            <Image
                src="/logo-dark.png"
                alt="ICONOVOUS Holdings Limited"
                width={220}
                height={70}
                priority
                className="h-auto w-[170px] sm:w-[210px] transition duration-300 group-hover:scale-[1.04] group-hover:brightness-110"
                />
            </Link>
            </div>

          <div className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
            <a
  href="#services"
  className="transition hover:text-cyan-300"
>Services</a>
            <a href="#solutions" className="hover:text-cyan-300">Solutions</a>
            <a href="#industries" className="hover:text-cyan-300">Industries</a>
            <Link href="/events" className="hover:text-cyan-300">
              Events
            </Link>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>

          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 lg:inline-flex">
            Book Consultation
          </a>

          <button
  aria-label="Toggle Menu"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-2 transition hover:border-cyan-300 lg:hidden"
>
            <Menu
                className={`h-6 w-6 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
            />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:scale-105"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-slate-900" />
            )}
          </button>
        </nav>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-xl lg:hidden"
            >
  <motion.div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-xl lg:hidden">
    <div className="flex flex-col gap-5 text-lg font-semibold text-white">

      <a
        href="#services"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Services
      </a>

      <a
        href="#solutions"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Solutions
      </a>

      <a
        href="#industries"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Industries
      </a>

      <Link
        href="/events"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Events
      </Link>

      <a
        href="#contact"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Contact
      </a>

    </div>
    </motion.div>
</motion.div>
)}
      </header>
      
      <div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
{/* ================= HERO SECTION ================= */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div
  animate={{ y: [0, -4, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }} 
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.45)]" />
            Enterprise IT • Cloud • DevOps • Software • AI
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} 
          className="max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Engineering the future of enterprise technology and digital transformation.
          </motion.h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            ICONOVOUS Holdings Limited delivers enterprise-grade IT consulting, cloud infrastructure, software engineering, DevOps, cybersecurity, AI automation, and digital transformation solutions for modern organizations seeking scalability, security, and operational excellence.
          </p>

          <motion.div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.45)] px-7 py-4 shadow-xl shadow-cyan-400/20 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.03] hover:bg-white active:scale-95">
              Start a Project <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200">
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <div className="relative animate-pulse overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/10 p-4 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-xl"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]" />
            <div className="rounded-[1.5rem] bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">ICONOVOUS Command Centre</p>
                  <h3 className="text-xl font-extrabold">Technology Operations Dashboard</h3>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">Live</div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Cloud Health", "99.99%", Cloud],
                  ["Security Score", "A+", ShieldCheck],
                  ["Deployments", "128", ServerCog],
                  ["Support SLA", "24/7", Headphones],
                ].map(([label, value, Icon], i) => (
                  <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-4">
                    <Icon className="mb-4 h-7 w-7 text-cyan-300" />
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="text-3xl font-extrabold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/25 to-cyan-300/10 p-5">
                <p className="mb-3 text-sm font-bold text-cyan-200">Digital Transformation Pipeline</p>
                <div className="space-y-3">
                  {["Consult", "Design", "Build", "Deploy", "Manage"].map((item, i) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                      <div className="h-2 flex-1 rounded-full bg-white/10">
                        <div className="h-2 rounded-full bg-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.45)]" style={{ width: `${55 + i * 9}%` }} />
                      </div>
                      <span className="w-16 text-xs text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-10 top-10 hidden rounded-2xl border border-cyan-300/20 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl lg:block">
  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
    Cloud Infrastructure
  </p>

  <h3 className="mt-2 text-2xl font-extrabold">99.99%</h3>

  <p className="mt-1 text-sm text-slate-300">
    Enterprise Uptime
  </p>
</div>

<div className="absolute -right-8 bottom-10 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl lg:block">
  <div className="flex items-center gap-3">
    <div className="h-3 w-3 rounded-full bg-emerald-400" />

    <span className="text-sm font-semibold text-slate-200">
      Systems Operational
    </span>
  </div>

  <div className="mt-4 flex gap-2">
    <div className="h-2 w-16 rounded-full bg-cyan-300" />
    <div className="h-2 w-10 rounded-full bg-blue-500" />
    <div className="h-2 w-6 rounded-full bg-violet-500" />
  </div>
</div>
        </motion.div>
      </section>

      <div className="mt-14 flex justify-center">
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
    }}
    className="flex h-14 w-8 justify-center rounded-full border border-white/20"
  >
    <div className="mt-2 h-3 w-3 rounded-full bg-cyan-300" />
  </motion.div>
</div>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <section
        id="technologies"
        className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Technology Ecosystem
          </p>
          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Built with modern enterprise technologies.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{
                y: -5,
                scale: 1.08,
                boxShadow: "0 0 30px rgba(34,211,238,0.25)",
            }}
              className="rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-2xl px-6 py-3 text-sm font-extrabold tracking-wide text-slate-200 shadow-lg transition hover:border-cyan-300 hover:text-cyan-300"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <section
        id="stats"
        className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-6 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-white/10 bg-slate-950/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-6 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-cyan-500/20"
            >
              <h3 className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">

                {stat.value === "99.99%" && (
                  <>
                    <CountUp
                      end={99.99}
                      duration={3}
                      decimals={2}
                    />
                    %
                  </>
                )}

                {stat.value === "24/7" && "24/7"}

                {stat.value === "150+" && (
                  <>
                    <CountUp
                      end={150}
                      duration={3}
                    />
                    +
                  </>
                )}

                {stat.value === "Enterprise" && "Enterprise"}

              </h3>
              <p className="mt-3 text-sm font-semibold tracking-wide text-slate-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

{/* TRUST SECTION */}

<section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

    <div className="mb-10 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
        Trusted Technologies
      </p>

      <h2 className="text-3xl font-extrabold sm:text-4xl">
        Enterprise-grade solutions powered by global technologies.
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

      {[
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Next.js",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-6 text-center font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
        >
          {item}
        </div>
      ))}

    </div>
  </div>
</section>

<section className="relative z-10 border-y border-white/10 bg-white/[0.03] backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
        Enterprise Capabilities
      </p>

      <h3 className="mt-2 text-2xl font-extrabold">
        Scalable technology systems built for modern organizations.
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">

      <div>
        <p className="text-3xl font-extrabold text-cyan-300">99.99%</p>
        <p className="mt-1 text-sm text-slate-400">
          Infrastructure Reliability
        </p>
      </div>

      <div>
        <p className="text-3xl font-extrabold text-cyan-300">24/7</p>
        <p className="mt-1 text-sm text-slate-400">
          Technical Support
        </p>
      </div>

      <div>
        <p className="text-3xl font-extrabold text-cyan-300">AI</p>
        <p className="mt-1 text-sm text-slate-400">
          Intelligent Automation
        </p>
      </div>

      <div>
        <p className="text-3xl font-extrabold text-cyan-300">Cloud</p>
        <p className="mt-1 text-sm text-slate-400">
          DevOps Infrastructure
        </p>
      </div>

    </div>
  </div>
</section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <motion.section
  id="services"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Our Services</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Complete IT solutions for modern organizations.</h2>
          <p className="mt-4 text-slate-300">From consulting to deployment and continuous management, ICONOVOUS provides the technical backbone businesses need to operate securely and grow confidently.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            
            <motion.div
  key={service.title}
  whileHover={{
    y: -12,
    scale: 1.03,
    rotateX: 4,
    rotateY: -4,
  }}
  transition={{ duration: 0.35 }}
  style={{
    transformStyle: "preserve-3d",
  }}
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 shadow-2xl backdrop-blur-xl transition hover:border-cyan-300/40 hover:shadow-[0_25px_80px_rgba(34,211,238,0.25)]"
>
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_60%)]" />

              <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl transition duration-700 group-hover:scale-150" />
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1200}
                transitionSpeed={1500}
                scale={1.02}
                gyroscope={true}
              >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >

                <div className="mb-6 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 shadow-lg shadow-cyan-500/10">
                  <service.icon className="h-10 w-10 text-cyan-300" />
                </div>

              </motion.div>
              </Tilt>
              <h3 className="text-xl font-extrabold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <motion.section
  id="solutions"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl lg:grid-cols-2 lg:p-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Why ICONOVOUS</p>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Built for performance, security, and business growth.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Security-first delivery", "Cloud-ready architecture", "Scalable development", "Professional IT governance", "Business-focused consulting", "Reliable support culture"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/50 p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <motion.section
  id="industries"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Industries</p>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Technology support across sectors.</h2>
          </div>
          <p className="max-w-xl text-slate-300">We help organizations improve operations, build digital platforms, automate workflows, and strengthen technology infrastructure.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-5">
              <Building2 className="h-6 w-6 text-cyan-300" />
              <span className="font-bold">{industry}</span>
            </div>
          ))}
        </div>
      </motion.section>

{/* TESTIMONIALS SECTION */}

<section className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

  <div className="mb-14 text-center">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
      Client Testimonials
    </p>

    <h2 className="text-3xl font-extrabold sm:text-5xl">
      Trusted by forward-thinking organizations.
    </h2>
  </div>

  <div className="grid gap-6 lg:grid-cols-3">

    {[
      {
        name: "Enterprise Client",
        text: "ICONOVOUS transformed our technology operations with professionalism and enterprise-grade execution.",
      },
      {
        name: "Startup Founder",
        text: "Their DevOps and cloud expertise helped us scale infrastructure confidently and securely.",
      },
      {
        name: "Business Executive",
        text: "Exceptional delivery, strategic consulting, and strong technical leadership throughout the project.",
      },
    ].map((item) => (
      <div
        key={item.name}
        className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
      >
        <p className="leading-8 text-slate-300">
          “{item.text}”
        </p>

        <div className="mt-6">
          <h3 className="font-extrabold">
            {item.name}
          </h3>
        </div>
      </div>
    ))}

  </div>
</section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

{/* WHY CHOOSE US SECTION */}

<section className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

  <div className="mb-14 text-center">

    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
      Why Choose ICONOVOUS
    </p>

    <h2 className="text-3xl font-extrabold sm:text-5xl">
      Technology leadership built on innovation and excellence.
    </h2>

  </div>

  <div className="grid gap-6 lg:grid-cols-3">

    {[
      {
        title: "Enterprise Expertise",
        text: "We architect scalable, secure, and future-ready technology systems for modern businesses.",
      },

      {
        title: "Innovation Driven",
        text: "We combine cloud, DevOps, AI, and software engineering to create intelligent digital ecosystems.",
      },

      {
        title: "Reliable Partnership",
        text: "We focus on long-term collaboration, operational excellence, and measurable business growth.",
      },
    ].map((item) => (

      <motion.div
        key={item.title}
        whileHover={{ y: -8 }}
        className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
      >

        <h3 className="text-2xl font-extrabold">
          {item.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {item.text}
        </p>

      </motion.div>

    ))}

  </div>

</section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <motion.section
  id="contact"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }} className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-cyan-300 to-blue-500 p-8 text-slate-950 shadow-2xl shadow-cyan-500/20 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-5xl">Ready to build, manage, or scale your next technology solution?</h2>
              <p className="mt-5 max-w-3xl text-lg font-medium text-slate-800">
                Partner with ICONOVOUS Holdings Limited for world-class IT consulting, development, DevOps, cloud, cybersecurity, and managed technology services.</p>
              <div className="mt-8 space-y-3 text-sm font-medium text-slate-800">

                <p>Email: info@iconovous.com</p>

                <p>Phone: +234 816 780 2629</p>

                <p>21 Admiralty Way, Lagos State, Nigeria</p>

              </div>
            </div>
            <form
  className="flex flex-col gap-4"
  onSubmit={async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
    e.target.reset();
  }}
>
  <input
    name="name"
    placeholder="Your Name"
    required
    className="rounded-xl border border-white/20 bg-white px-4 py-3 text-black outline-none"
  />

  <input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    className="rounded-xl border border-white/20 bg-white px-4 py-3 text-black outline-none"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    required
    rows="5"
    className="rounded-xl border border-white/20 bg-white px-4 py-3 text-black outline-none"
  />

    {success && (
      <div className="rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-white">
        Message sent successfully.
      </div>
    )}

  <button
    type="submit"
    disabled={loading}
    className="rounded-xl bg-slate-950 px-6 py-4 font-extrabold text-white transition hover:scale-[1.03] hover:bg-white active:scale-95 hover:text-slate-950"
  >
    {loading ? (
      <div className="flex items-center justify-center gap-3">

        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

        Sending...

      </div>
    ) : (
      "Send Message"
    )}
  </button>
</form>
          </div>
        </div>
      </motion.section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <motion.section className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Trusted Technology Partner
              </p>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Enterprise-grade solutions engineered for growth and innovation.
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 shadow-xl shadow-cyan-400/20 font-extrabold text-slate-950 transition hover:scale-[1.03] hover:bg-white active:scale-95"
              >
                Schedule Consultation
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-extrabold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </motion.section>

<div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

{/* FINAL CTA SECTION */}

<section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

  <div className="rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-10 text-center backdrop-blur-2xl">

    <h2 className="text-3xl font-extrabold sm:text-5xl">
      Ready to transform your technology infrastructure?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
      Let ICONOVOUS Holdings Limited help your organization scale securely,
      innovate confidently, and operate with enterprise-grade efficiency.
    </p>

    <a
      href="#contact"
      className="mt-8 inline-flex rounded-full bg-cyan-300 px-8 py-4 font-extrabold text-slate-950 transition duration-300 hover:scale-105 hover:bg-white"
    >
      Start Your Project
    </a>

  </div>

</section>

<section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">

  <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl">

    <h2 className="text-4xl font-extrabold">
      Stay updated with enterprise innovation.
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-slate-300">
      Receive updates about technology trends, enterprise solutions,
      upcoming events, and innovation opportunities.
    </p>

    <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row">

      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 outline-none"
      />

      <button className="rounded-2xl bg-cyan-300 px-8 py-4 font-bold text-slate-950 transition hover:bg-white">
        Subscribe
      </button>

    </div>
  </div>
</section>

{/* EVENTS PREVIEW SECTION */}

<section className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

  <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 backdrop-blur-xl">

    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

      <div>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          Events & Experiences
        </p>

        <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Premium enterprise events, conferences, and ticket experiences.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Discover innovation summits, startup expos,
          AI conferences, enterprise networking events,
          and premium technology experiences powered
          by ICONOVOUS Holdings Limited.
        </p>

        <div className="mt-10">

          <Link
            href="/events"
            className="inline-flex items-center gap-3 rounded-full bg-cyan-300 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-white active:scale-95"
          >
            Explore Events
            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>

      </div>

      <div className="relative h-[400px] overflow-hidden rounded-[2rem]">

        <Image
          src="/event1.jpg"
          alt="Events"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

      </div>

    </div>

  </div>

</section>

{/* FOOTER SECTION */}
      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-3 lg:gap-20">

  {/* LEFT SIDE */}

  <div>

    <Image
      src="/logo-dark.png"
      alt="ICONOVOUS"
      width={180}
      height={60}
      className="mb-4 h-auto w-[150px]"
    />

    <p className="max-w-md text-sm leading-8 text-slate-400">
      ICONOVOUS Holdings Limited delivers enterprise-grade IT consulting,
      cloud infrastructure, DevOps, cybersecurity, software engineering,
      and AI-powered digital transformation solutions.
    </p>

    <div className="mt-8 border-t border-white/10 pt-6">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} ICONOVOUS Holdings Limited.
      </p>
    </div>

  </div>

  {/* MIDDLE LINKS */}

  <div>

    <h3 className="mb-5 text-lg font-bold text-white">
      Quick Links
    </h3>

    <div className="flex flex-col gap-4 text-sm text-slate-400">

      <a href="#services" className="transition hover:text-cyan-300">
        Services
      </a>

      <a href="#solutions" className="transition hover:text-cyan-300">
        Solutions
      </a>

      <a href="#industries" className="transition hover:text-cyan-300">
        Industries
      </a>

      <Link
        href="/events"
        className="transition hover:text-cyan-300"
        >
        Events
      </Link>

      <a href="#contact" className="transition hover:text-cyan-300">
        Contact
      </a>

    </div>

  </div>

  {/* RIGHT SOCIALS */}

  <div>

    <h3 className="mb-5 text-lg font-bold text-white">
      Connect With Us
    </h3>
<div className="flex items-center gap-4">
  <a
    href="https://wa.me/2348167802629"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <FaWhatsapp className="h-5 w-5" />
  </a>

  <a
    href="https://instagram.com/iconovous-limited"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <FaInstagram className="h-5 w-5" />
  </a>

  <a
    href="https://linkedin.com/company/iconovous-holdings-limited"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <FaLinkedin className="h-5 w-5" />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <FaYoutube className="h-5 w-5" />
  </a>
  </div>
  </div>
</div>
      </footer>
      
{/* FLOATING WHATSAPP BUTTON */}

<a
  href="https://wa.me/2348167802629"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl shadow-green-500/30 transition duration-300 hover:scale-105 hover:bg-green-400"
>
  <FaWhatsapp className="h-6 w-6" />

  <span className="hidden font-bold sm:inline">
    Chat with us
  </span>
</a>
    </motion.main>
  );
}
