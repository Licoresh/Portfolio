"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((label) => document.getElementById(label.toLowerCase())).filter(Boolean) as HTMLElement[];
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 140);
      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-white/8 bg-[#0b0d10]/78 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="container-shell flex h-[76px] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="text-lg font-black tracking-tight"><span className="accent-text">&lt;</span>Jolo A. Cañete<span className="accent-text"> /&gt;</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className={`relative py-2 text-sm font-semibold transition ${active === label ? "text-white" : "text-white/55 hover:text-white"}`}>
              {label}
              {active === label && <motion.span layoutId="nav-active" className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--accent)]" />}
            </a>
          ))}
        </div>
        <button className="rounded-xl border border-white/10 p-2.5 md:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-white/8 bg-[#0b0d10]/96 px-4 pb-5 backdrop-blur-xl md:hidden">
            <div className="container-shell flex flex-col py-3">
              {links.map((label) => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-white/70 hover:bg-white/5 hover:text-white">{label}</a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
