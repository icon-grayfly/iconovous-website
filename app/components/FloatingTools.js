"use client";

import { GraduationCap, MessageCircle, Search, Sparkles, X } from "lucide-react";
import { useState } from "react";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function FloatingTools() {
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);

  return (
    <>
      <a
        href="https://www.google.com/"
        {...externalLinkProps}
        aria-label="Open AI assistant"
        title="AI assistant"
        className="ai-flight"
      >
        <span className="ai-flight__trail" />
        <span className="ai-flight__body">
          <svg
            className="ai-flight__bird"
            viewBox="0 0 180 120"
            role="img"
            aria-label="Animated flying bird"
          >
            <defs>
              <linearGradient id="ai-bird-blue" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#67e8f9" />
                <stop offset="0.55" stopColor="#2563eb" />
                <stop offset="1" stopColor="#172554" />
              </linearGradient>
            </defs>
            <path className="ai-flight__wing ai-flight__wing--left" d="M83 57C55 15 26 7 4 13c24 14 38 32 52 56 9 1 18-3 27-12Z" fill="url(#ai-bird-blue)" />
            <path className="ai-flight__wing ai-flight__wing--right" d="M91 55C119 11 151 5 176 13c-25 15-42 35-57 61-10-2-19-7-28-19Z" fill="url(#ai-bird-blue)" />
            <path d="M56 57c22-10 43-12 67 1l25 19-27 4-15 27-15-28-28-8-18-15 11 0Z" fill="#1d4ed8" />
            <path d="M145 73l30 8-32 7Z" fill="#93c5fd" />
            <circle cx="119" cy="60" r="3" fill="white" />
          </svg>
          <span className="ai-flight__label">AI</span>
        </span>
      </a>

      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
        {globalSearchOpen && (
          <div
            id="global-search-resources"
            role="dialog"
            aria-label="Global Search resources"
            className="mb-1 w-[min(21rem,calc(100vw-2rem))] rounded-2xl border border-cyan-300/25 bg-slate-950/95 p-5 text-left shadow-2xl shadow-cyan-950/50 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-bold text-white">Welcome to Global Search</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Explore trusted open-source resources.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close Global Search"
                onClick={() => setGlobalSearchOpen(false)}
                className="rounded-full p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://osintframework.com/"
                {...externalLinkProps}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-white"
              >
                <Search className="h-4 w-4" />
                Framework
              </a>
              <a
                href="https://www.passportindex.org/"
                {...externalLinkProps}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                <Sparkles className="h-4 w-4" />
                Passport Index
              </a>
            </div>
          </div>
        )}

        <button
          type="button"
          aria-expanded={globalSearchOpen}
          aria-controls="global-search-resources"
          onClick={() => setGlobalSearchOpen(!globalSearchOpen)}
          title="Global Search"
          className="floating-tool floating-tool--search"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>

        <a
          href="https://www.udemy.com/"
          {...externalLinkProps}
          title="Learning Management System"
          className="floating-tool floating-tool--lms"
        >
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </a>

        <a
          href="https://wa.me/2348167802629"
          {...externalLinkProps}
          title="Chat with us on WhatsApp"
          className="floating-tool floating-tool--whatsapp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
