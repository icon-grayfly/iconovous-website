"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Layers3,
  Menu,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import FloatingTools from "../components/FloatingTools";
import AdvertCarousel from "../components/AdvertCarousel";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const portfolioItems = [
  {
    title: "ICONOVOUS Tech Summit",
    company: "ICONOVOUS Holdings Limited",
    category: "Events & Experiences",
    description:
      "A premium event experience for technology leaders, innovators, and organizations exploring AI, cloud, cybersecurity, and digital transformation.",
    image: "/event1.jpg",
    imageAlt: "Technology summit stage and event experience",
    visitLabel: "Visit event page",
    visitUrl: "/events",
    document: null,
  },
  {
    title: "Star Station Inc.",
    company: "Brand Experience",
    category: "Brand & Digital Experience",
    description:
      "Star Station is a top-rated innovative management company in Lagos, Nigeria. We engineer robust multi-sensory campaigns to expand market visibility, positioning businesses and public profiles for long-term growth.",
    image: "/starstation.jpg",
    imageAlt: "Star Station Inc preview",
    visitLabel: "Visit Star Station",
    visitUrl: "https://starstation-beryl.vercel.app/",
    document: "/portfolio-docs/starstation-deck.pdf",
  },
  {
    title: "Enterprise Cloud Operations",
    company: "Sample client product showcase",
    category: "Cloud & IT Operations",
    description:
      "A sample operations concept showing how secure infrastructure, monitoring, automation, and support can be brought together in one clear experience.",
    image: "/event2.jpg",
    imageAlt: "Enterprise cloud operations concept preview",
    visitLabel: "Discuss a similar build",
    visitUrl: "/contact",
    document: null,
  },
  {
    title: "Mobile Product Launch",
    company: "Sample mobile app showcase",
    category: "Websites & Mobile Apps",
    description:
      "A flexible product launch canvas for mobile applications and responsive websites, with room for product screenshots, store links, and launch materials.",
    image: "/event3.jpg",
    imageAlt: "Mobile product launch concept preview",
    visitLabel: "Start a project",
    visitUrl: "/contact",
    document: null,
  },
];

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/50">
        <AdvertCarousel />
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group transition duration-300">
            <Image
              src="/logo-dark.png"
              alt="ICONOVOUS Holdings Limited"
              width={220}
              height={70}
              priority
              className="h-auto w-[170px] transition duration-300 group-hover:scale-[1.04] group-hover:brightness-110 sm:w-[210px]"
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
            <Link href="/#services" className="transition hover:text-cyan-300">Services</Link>
            <Link href="/#solutions" className="transition hover:text-cyan-300">Solutions</Link>
            <Link href="/#industries" className="transition hover:text-cyan-300">Industries</Link>
            <Link href="/portfolio" className="font-bold text-cyan-300">Portfolio</Link>
            <Link href="/events" className="transition hover:text-cyan-300">Events</Link>
            <Link href="/contact" className="transition hover:text-cyan-300">Contact</Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="https://www.google.com/" {...externalLinkProps} className="rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20">
              CyberSpace
            </a>
            <a href="https://www.google.com/" {...externalLinkProps} aria-label="Open Hub store" className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/15 px-4 py-2.5 text-sm font-bold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/25">
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Hub
            </a>
            <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-white/10 bg-white/[0.06] p-2 transition hover:border-cyan-300 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-5 text-lg font-semibold text-white">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-cyan-300">Services</Link>
              <Link href="/#solutions" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-cyan-300">Solutions</Link>
              <Link href="/#industries" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-cyan-300">Industries</Link>
              <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-cyan-300">Portfolio</Link>
              <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-cyan-300">Events</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-cyan-300">Contact</Link>
              <a href="https://www.google.com/" {...externalLinkProps} onClick={() => setMobileMenuOpen(false)} className="transition hover:text-cyan-300">CyberSpace</a>
              <a href="https://www.google.com/" {...externalLinkProps} onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center gap-2 transition hover:text-amber-300"><ShoppingBag className="h-5 w-5" aria-hidden="true" />Hub</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_34%),radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_42%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-100">
              <Sparkles className="h-4 w-4" />
              Selected work & experiences
            </div>
            <h1 className="bg-gradient-to-r from-white via-cyan-100 to-amber-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-7xl">
              Work that turns ambitious ideas into useful digital experiences.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Explore a living showcase of our brands, activities, technology systems, websites, and mobile product concepts. Each project can carry its own preview, destination, and downloadable presentation materials.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-slate-950 transition hover:scale-[1.03] hover:bg-white">
                Browse the work <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200">
                Build something together
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              [BriefcaseBusiness, "Brand showcases", "Clear stories for products and companies"],
              [MonitorSmartphone, "Digital products", "Websites, dashboards, and mobile apps"],
              [Layers3, "Launch materials", "Previews, decks, and useful resources"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="border-l border-amber-300/50 pl-5">
                <Icon className="mb-4 h-7 w-7 text-amber-300" />
                <h2 className="font-extrabold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">The portfolio</p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">A closer look at what we make.</h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-400">The sample entries below are ready to be replaced with your real brands, client work, app previews, and supporting documents.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl"
            >
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Preview ${item.title} image`}
                  className="absolute inset-0 z-10 block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/80"
                >
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-5 right-5 rounded-full border border-white/30 bg-slate-950/70 px-3 py-2 text-xs font-bold text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                    Click to preview
                  </span>
                </button>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-6 z-20 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200 backdrop-blur-xl">{item.category}</div>
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-sm font-semibold text-cyan-300">{item.company}</p>
                <h3 className="mt-2 text-2xl font-extrabold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {item.visitUrl.startsWith("http") ? (
                    <a href={item.visitUrl} {...externalLinkProps} className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white">
                      {item.visitLabel} <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link href={item.visitUrl} className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white">
                      {item.visitLabel} <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                  {item.document && (
                    <a href={item.document} download className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 px-5 py-3 text-sm font-bold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/10">
                      Download deck <Download className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/15 via-white/[0.04] to-cyan-300/10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-200">Have a product to showcase?</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Let&apos;s give your next idea a sharper digital presence.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">Share your brand, website, app, campaign, or activity with us and we can shape it into a polished portfolio story.</p>
          </div>
          <div className="lg:text-right">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-slate-950 transition hover:scale-[1.03] hover:bg-white">
              Start a conversation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-3 lg:gap-20">
          <div>
            <Image
              src="/logo-dark.png"
              alt="ICONOVOUS Holdings Limited"
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

          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-cyan-300">Home</Link>
              <Link href="/#services" className="transition hover:text-cyan-300">Services</Link>
              <Link href="/#solutions" className="transition hover:text-cyan-300">Solutions</Link>
              <Link href="/#industries" className="transition hover:text-cyan-300">Industries</Link>
              <Link href="/portfolio" className="transition hover:text-cyan-300">Portfolio</Link>
              <Link href="/events" className="transition hover:text-cyan-300">Events</Link>
              <Link href="/contact" className="transition hover:text-cyan-300">Contact</Link>
              <a href="https://www.google.com/" {...externalLinkProps} className="transition hover:text-amber-300">Hub Store</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Connect With Us</h3>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/2348167802629" {...externalLinkProps} aria-label="Chat with ICONOVOUS on WhatsApp" className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:text-emerald-300 hover:shadow-lg">
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/iconovous-limited" {...externalLinkProps} aria-label="ICONOVOUS on Instagram" className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-pink-300/60 hover:text-pink-300 hover:shadow-lg">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/iconovous-holdings-limited" {...externalLinkProps} aria-label="ICONOVOUS on LinkedIn" className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:text-blue-300 hover:shadow-lg">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" {...externalLinkProps} aria-label="ICONOVOUS on YouTube" className="rounded-full border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-red-300/60 hover:text-red-300 hover:shadow-lg">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} image preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="group absolute right-4 top-4 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/70 bg-slate-950/80 text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.55)] transition duration-300 hover:scale-110 hover:border-white hover:bg-cyan-300 hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/80 sm:right-8 sm:top-8"
          >
            <span className="absolute inset-0 rounded-full border border-cyan-300/50 opacity-0 transition duration-300 group-hover:scale-125 group-hover:opacity-100" />
            <X className="relative h-7 w-7 transition duration-300 group-hover:rotate-90" aria-hidden="true" />
          </button>

          <div className="relative h-[min(78vh,52rem)] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={selectedImage.image}
              alt={selectedImage.imageAlt}
              fill
              sizes="95vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-1/2 w-full max-w-2xl -translate-x-1/2 translate-y-14 text-center">
              <p className="text-lg font-extrabold text-white">{selectedImage.title}</p>
              <p className="mt-1 text-sm text-slate-400">Click outside the image or use the X button to close</p>
            </div>
          </div>
        </div>
      )}

      <FloatingTools />
    </main>
  );
}
