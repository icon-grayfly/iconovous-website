"use client";
import React from "react";
import { motion } from "framer-motion";
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
  Globe2,
  Layers3,
  Building2,
} from "lucide-react";

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
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute top-80 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-40 left-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <header className="relative z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl sticky top-0">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-300 shadow-lg shadow-blue-500/25">
              <Globe2 className="h-6 w-6 text-slate-950" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">ICONOVOUS</p>
              <p className="text-xs text-cyan-200">Holdings Limited</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#solutions" className="hover:text-cyan-300">Solutions</a>
            <a href="#industries" className="hover:text-cyan-300">Industries</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>

          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 lg:inline-flex">
            Book Consultation
          </a>

          <button className="rounded-xl border border-white/10 bg-white/[0.04] p-2 transition hover:border-cyan-300 hover:bg-cyan-300/10 lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Enterprise IT • Cloud • DevOps • Software • AI
          </div>

          <h1 className="max-w-5xl bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Transforming businesses through intelligent technology solutions.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            ICONOVOUS Holdings Limited helps organizations design, build, manage, secure, and scale digital systems through IT management, consulting, software development, DevOps, cloud management, cybersecurity, and AI-powered automation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-white">
              Start a Project <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200">
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/10 p-4 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-xl"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]" />
            <div className="rounded-[1.5rem] bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">ICONOVOUS Command Centre</p>
                  <h3 className="text-xl font-black">Technology Operations Dashboard</h3>
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
                  <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="mb-4 h-7 w-7 text-cyan-300" />
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="text-3xl font-black">{value}</p>
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
                        <div className="h-2 rounded-full bg-cyan-300" style={{ width: `${55 + i * 9}%` }} />
                      </div>
                      <span className="w-16 text-xs text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Technology Ecosystem
          </p>
          <h2 className="text-3xl font-black sm:text-5xl">
            Built with modern enterprise technologies.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ y: -5, scale: 1.05 }}
              className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold tracking-wide text-slate-200 shadow-lg backdrop-blur transition hover:border-cyan-300 hover:text-cyan-300"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-center shadow-xl"
            >
              <h3 className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-4xl font-black text-transparent">
                {stat.value}
              </h3>
              <p className="mt-3 text-sm font-semibold tracking-wide text-slate-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Our Services</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Complete IT solutions for modern organizations.</h2>
          <p className="mt-4 text-slate-300">From consulting to deployment and continuous management, ICONOVOUS provides the technical backbone businesses need to operate securely and grow confidently.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 shadow-2xl backdrop-blur transition hover:border-cyan-300/40 hover:shadow-cyan-500/10"><div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%)]" />
              <service.icon className="mb-6 h-10 w-10 text-cyan-300" />
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="solutions" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur lg:grid-cols-2 lg:p-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Why ICONOVOUS</p>
            <h2 className="text-3xl font-black sm:text-5xl">Built for performance, security, and business growth.</h2>
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
      </section>

      <section id="industries" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Industries</p>
            <h2 className="text-3xl font-black sm:text-5xl">Technology support across sectors.</h2>
          </div>
          <p className="max-w-xl text-slate-300">We help organizations improve operations, build digital platforms, automate workflows, and strengthen technology infrastructure.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Building2 className="h-6 w-6 text-cyan-300" />
              <span className="font-bold">{industry}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-cyan-300 to-blue-500 p-8 text-slate-950 shadow-2xl shadow-cyan-500/20 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-5xl">Ready to build, manage, or scale your next technology solution?</h2>
              <p className="mt-5 max-w-3xl text-lg font-medium text-slate-800">Partner with ICONOVOUS Holdings Limited for world-class IT consulting, development, DevOps, cloud, cybersecurity, and managed technology services.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="mailto:info@iconovous.com" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 font-black text-white transition hover:bg-white hover:text-slate-950">Email ICONOVOUS</a>
              <a href="tel:+2348167802629" className="inline-flex items-center justify-center rounded-full border-2 border-slate-950 px-7 py-4 font-black text-slate-950 transition hover:bg-slate-950 hover:text-white">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Trusted Technology Partner
              </p>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                Enterprise-grade solutions engineered for growth and innovation.
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-white"
              >
                Schedule Consultation
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-black text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-400 lg:flex-row lg:items-center">
          <p>© {new Date().getFullYear()} ICONOVOUS Holdings Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#solutions" className="hover:text-cyan-300">Solutions</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
