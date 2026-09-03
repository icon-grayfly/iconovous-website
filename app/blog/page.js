"use client";

import Link from "next/link";
import FloatingTools from "../components/FloatingTools";
import AdvertCarousel from "../components/AdvertCarousel";

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/50">
        <AdvertCarousel />
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-black tracking-[0.2em] text-cyan-200">ICONOVOUS</Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-200 sm:gap-7">
            <Link href="/#services" className="hover:text-cyan-300">Services</Link>
            <Link href="/events" className="hover:text-cyan-300">Events</Link>
            <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white">CyberSpace</a>
          </div>
        </nav>
      </header>
      <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4">
        <div className="text-center">
        <h1 className="text-5xl font-extrabold">
          ICONOVOUS Blog
        </h1>

        <p className="mt-4 text-slate-400">
          Blog content coming soon.
        </p>
        </div>
      </div>
      <FloatingTools />
    </main>
  );
}