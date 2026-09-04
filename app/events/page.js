"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import FloatingTools from "../components/FloatingTools";
import AdvertCarousel from "../components/AdvertCarousel";
import {
  CalendarDays,
  MapPin,
  Ticket,
  ArrowRight,
  Menu,
  Sun,
  Moon,
  ShoppingBag,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const events = [
 {
    title: "REDeFiNE TOMORROW 2026",
    date: "June 4–5, 2026",
    location: "Global Web3 & AI Summit",
    images: [
        "/redefine1.jpg",
        "/redefine2.jpg",
        "/redefine3.jpg",
    ],
    description:
        "The REDeFiNE TOMORROW 2026 stage brings together global builders, leading VCs, and institutional pioneers moving technology into sustainable real-world infrastructure. Explore AI x Digital Assets, Stablecoins, RWA Tokenization, DeFi ecosystems, institutional finance integration, regulation, and capital markets innovation.",
    ticketLink:
        "https://redefinetomorrow2026.scb10x.com/register",
 },
  
{
  title: "Accelerate Conference 2026",
  date: "Wednesday, June 4 - Sunday, June 5, 2026",
  location: "PISTIS Conference Centre, Lekki, Lagos, Nigeria",
  images: [
    "/accelerate1.jpg",
    "/accelerate2.jpg",
    "/accelerate3.jpg",
  ],
  ticketLink: "https://elevationng.org/accelerate/",
  description:
    "Accelerate Conference 2026 is a transformational faith experience where lives are changed through powerful worship, teaching, healing, and spiritual encounters. Families, leaders, innovators, and believers gather yearly to encounter divine transformation and renewed purpose...",
},

    {
    title: "ICONOVOUS Tech Summit 2026",
    date: "August 24, 2026",
    location: "Lagos, Nigeria",
    images: [
        "/event1.jpg"
    ],
    description:
      "Enterprise technology summit focused on AI, cloud infrastructure, cybersecurity, DevOps, and digital transformation.",
    ticketLink:
        "https://www.eventbrite.com/e/iconovous-tech-summit-2026-tickets-1234567890",
  },

  {
    title: "Future of AI Conference",
    date: "September 12, 2026",
    location: "Abuja, Nigeria",
    images: [
        "/event2.jpg"
    ],
    description:
      "Exploring the next generation of AI automation, enterprise systems, and intelligent innovation.",
    ticketLink:
        "https://www.eventbrite.com/e/future-of-ai-conference-tickets-1234567890",
  },

  {
    title: "Startup Innovation Expo",
    date: "October 03, 2026",
    location: "Victoria Island, Lagos",
    images: [
        "/event3.jpg"
    ],
    description:
      "Connecting startups, investors, enterprise leaders, and innovators shaping Africa's future.",
    ticketLink:
        "https://www.eventbrite.com/e/startup-innovation-expo-tickets-1234567890",
  },
];

export default function EventsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [selectedEventImages, setSelectedEventImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">

{/* ANNOUNCEMENT BAR */}

{/* LIVE ENTERPRISE MARQUEE */}

<section className="hidden">

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
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/50">
        <AdvertCarousel />
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
            <Link href="/#services" className="transition hover:text-cyan-300">Services</Link>
            <Link href="/#solutions" className="hover:text-cyan-300">Solutions</Link>
            <Link href="/#industries" className="hover:text-cyan-300">Industries</Link>
            <Link href="/portfolio" className="hover:text-cyan-300">
              Portfolio
            </Link>
            <Link href="/events" className="hover:text-cyan-300">
              Events
            </Link>
            <Link href="/contact" className="hover:text-cyan-300">
                Contact
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20">CyberSpace</a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Open Hub store" className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/15 px-4 py-2.5 text-sm font-bold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/25"><ShoppingBag className="h-4 w-4" aria-hidden="true" />Hub</a>
            <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Book Consultation</Link>
          </div>

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

      <Link
        href="/#services"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Services
      </Link>

      <Link
        href="/#solutions"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Solutions
      </Link>

      <Link
        href="/#industries"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Industries
      </Link>

      <Link
        href="/portfolio"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        Portfolio
      </Link>

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

      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMobileMenuOpen(false)}
        className="transition hover:text-cyan-300"
      >
        CyberSpace
      </a>

      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMobileMenuOpen(false)}
        className="inline-flex items-center gap-2 transition hover:text-amber-300"
      >
        <ShoppingBag className="h-5 w-5" aria-hidden="true" />
        Hub
      </a>

    </div>
    </motion.div>
</motion.div>
)}
      </header>

      {/* HERO SECTION */}

      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Premium Events & Experiences
            </div>

            <h1 className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-7xl">
              Enterprise Events & Ticket Experiences
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Discover premium conferences, innovation summits,
              technology expos, startup events, and enterprise
              experiences powered by ICONOVOUS Holdings Limited.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#events"
                className="rounded-full bg-cyan-300 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-white active:scale-95"
              >
                Explore Events
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/10 px-8 py-4 font-bold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Back Home
              </Link>

            </div>

          </motion.div>
        </div>
      </section>

      {/* EVENTS SECTION */}

      <section
        id="events"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >

        <div className="mb-14">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Upcoming Events
          </p>

          <h2 className="text-4xl font-extrabold">
            Premium experiences for innovators.
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition"
            >

{/* EVENT IMAGE */}

<div className="relative h-64 overflow-hidden bg-black">

  <motion.div
    animate={{
      x: ["0%", `-${(event.images.length - 1) * 100}%`],
    }}
    transition={{
      repeat: Infinity,
      duration: event.images.length * 4,
      ease: "linear",
    }}
    className="flex h-full"
  >

    {event.images.map((img, index) => (
      <div
        key={index}
        className="relative min-w-full cursor-pointer overflow-hidden"
        onClick={() => {
          setSelectedImageIndex(index);
          setSelectedEventImages(event.images);
        }}
      >

        <Image
  src={img}
  alt={event.title}
  fill
  priority={index === 0}
  loading={index === 0 ? "eager" : "lazy"}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover transition duration-700 hover:scale-110"
/>

      </div>
    ))}

  </motion.div>

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

</div>

              <div className="p-7">

                <div className="mb-4 flex items-center gap-2 text-cyan-300">
                  <CalendarDays className="h-5 w-5" />
                  <span className="font-semibold">
                    {event.date}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold">
                  {event.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-slate-400">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>

                <motion.p
                    layout
                    className="mt-5 leading-7 text-slate-300"
                >
                    {expandedEvent === i
                        ? event.description
                        : `${event.description.slice(0, 120)}...`}
                </motion.p>

                <div className="mt-8 flex gap-4">

                  <a
                    href={event.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-white"
                  >
                    <Ticket className="h-5 w-5" />
                    Tickets
                  </a>

                  <button
                    onClick={() =>
                        setExpandedEvent(expandedEvent === i ? null : i)
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-bold transition hover:border-cyan-300 hover:text-cyan-300"
                  >
                    {expandedEvent === i ? "Collapse" : "More"}

                    <ArrowRight
                      className={`h-5 w-5 transition duration-300 ${
                        expandedEvent === i ? "rotate-90" : ""
                      }`}
                    />
                    </button>

                </div>
              </div>
            </motion.div>
          ))}

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

      <Link
       href="/contact" 
       className="transition hover:text-cyan-300">
        Contact
      </Link>

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

<FloatingTools />

{/* FULL-SCREEN IMAGE MODAL */}

{/* FULLSCREEN IMAGE PREVIEW */}

{selectedImageIndex !== null && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4">

    {/* CLOSE BUTTON */}

      <button
        onClick={() => {
            setSelectedImageIndex(null);
            setSelectedEventImages([]);
        }}
        className="absolute right-6 top-6 z-[1000] flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 text-4xl font-light text-white backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-300 hover:text-black"
    >
        ×
    </button>

    {/* LEFT ARROW */}

    <button
      onClick={() =>
        setSelectedImageIndex((prev) =>
          prev === 0
            ? selectedEventImages.length - 1
            : prev - 1
        )
      }
      className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-4 text-3xl text-white backdrop-blur-xl transition hover:bg-cyan-300 hover:text-black"
    >
      ‹
    </button>

    {/* IMAGE */}

    <div className="relative h-[85vh] w-full max-w-5xl">

      <Image
        src={selectedEventImages?.[selectedImageIndex] || "/fallback.jpg"}
        alt="Event Preview"
        fill
        sizes="(max-width: 768px) 95vw, (max-width: 1400px) 80vw, 1200px"
        className="object-contain"        
      />

    </div>

    {/* RIGHT ARROW */}

    <button
      onClick={() =>
        setSelectedImageIndex((prev) =>
          prev === selectedEventImages.length - 1
            ? 0
            : prev + 1
        )
      }
      className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-4 text-3xl text-white backdrop-blur-xl transition hover:bg-cyan-300 hover:text-black"
    >
      ›
    </button>

  </div>
)}

    </main>
  );
}