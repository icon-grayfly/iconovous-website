"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, {useState} from "react";

import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Send,
  Sun,
  Moon,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.main className="min-h-screen overflow-hidden bg-slate-950 text-white">

{/* ANNOUNCEMENT BAR */}

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

      {/*<span>Enterprise IT Solutions</span>
      <span>Cloud Infrastructure</span>
      <span>AI Automation Systems</span>
      <span>Cybersecurity & Compliance</span>
      <span>24/7 Technical Support</span>
      <span>DevOps & Scalability</span>
      <span>Software Engineering Excellence</span>
      <span>Digital Transformation Experts</span> */}

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
            <Link href="/contact" className="hover:text-cyan-300">
                Contact
            </Link>
          </div>

          <Link href="/contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 lg:inline-flex">
            Book Consultation
          </Link>

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

      <Link
        href="/contact"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Contact
      </Link>

    </div>
    </motion.div>
</motion.div>
)}
      </header>

      {/* HERO */}

      <section className="relative px-4 py-28 sm:px-6 lg:px-8">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_40%)]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-6xl"
        >

          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            Contact ICONOVOUS
          </div>

          <h1 className="max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-7xl">
            Let’s Build The Future Together
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Reach out to ICONOVOUS Holdings Limited for enterprise IT,
            cloud systems, DevOps, AI solutions, cybersecurity,
            digital transformation, and strategic technology partnerships.
          </p>

        </motion.div>
      </section>

      {/* CONTACT GRID */}

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{
                type: "spring",
                stiffness: 120,
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur-xl transition duration-300 hover:border-cyan-300/40 hover:shadow-cyan-500/10"
        >

          <h2 className="text-3xl font-extrabold">
            Contact Information
          </h2>

          <div className="mt-10 space-y-8">

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 text-cyan-300" />
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-slate-400">
                  +234 816 780 2629
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 text-cyan-300" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-slate-400">
                  eriadura.oo@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 text-cyan-300" />
              <div>
                <p className="font-bold">Location</p>
                <p className="text-slate-400">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{
                type: "spring",
                stiffness: 120,
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur-xl transition duration-300 hover:border-cyan-300/40 hover:shadow-cyan-500/10"
        >

          <div className="grid gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-300"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-300"
            />

            <input
              type="text"
              placeholder="Company / Organization"
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-300"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-300"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-300 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-white"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>

          </div>

        </motion.div>

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
