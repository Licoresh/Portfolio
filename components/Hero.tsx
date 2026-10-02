"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, GitBranch, Users, Mail, Code2, Braces, Atom, Coffee, PenTool, Gamepad2 } from "lucide-react";
import { motion } from "motion/react";
import { socials } from "@/data/socials";
import useSafeReducedMotion from "./useSafeReducedMotion";

const roles = ["Full-Stack Developer", "Web App Developer", "Roblox Game Developer"];
const socialIcons = { GitHub: GitBranch, Facebook: Users, Email: Mail } as const;
const tech = [
  { label: "JS", Icon: Braces, pos: "left-[4%] top-[14%]" },
  { label: "TS", Icon: Code2, pos: "right-[4%] top-[12%]" },
  { label: "React", Icon: Atom, pos: "left-[-1%] bottom-[25%]" },
  { label: "Java", Icon: Coffee, pos: "right-[-1%] bottom-[28%]" },
  { label: "Figma", Icon: PenTool, pos: "left-[23%] bottom-[1%]" },
  { label: "Roblox Studio", Icon: Gamepad2, pos: "right-[16%] bottom-[2%]" },
];

export default function Hero() {
  const reduce = useSafeReducedMotion();
  const [role, setRole] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setRole((v) => (v + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-[76px]">
      <div className="grid-fade absolute inset-0 -z-10" />
      <div className="container-shell grid min-h-[calc(100vh-76px)] items-center gap-14 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-8">
        <motion.div initial={reduce ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <p className="mb-5 text-sm font-bold uppercase tracking-[.22em] text-white/55">Hello, I am</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[.96] tracking-[-.055em] sm:text-6xl md:text-7xl xl:text-8xl">Jolo A. Cañete</h1>
          <div className="mt-5 min-h-10 text-xl font-bold text-white/75 sm:text-2xl">
            A <span className="accent-text inline-block min-w-[150px]">{roles[role]}</span> based in Iligan City
          </div>
          <p className="muted mt-6 max-w-2xl text-base leading-8 sm:text-lg">I build practical web applications, management systems, high-fidelity prototypes, and Roblox experiences that turn ideas into useful and engaging digital products.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex min-h-12 items-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 font-extrabold text-[#160b07] shadow-[0_10px_40px_rgba(255,107,53,.2)] transition hover:-translate-y-0.5 hover:brightness-110">View Projects <ArrowRight size={18} className="transition group-hover:translate-x-1" /></a>
            <a href="#contact" className="inline-flex min-h-12 items-center rounded-2xl border border-white/12 bg-white/[.035] px-6 py-3 font-bold transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[.07]">Contact Me</a>
          </div>
          <div className="mt-8 flex items-center gap-3" aria-label="Social links">
            {socials.map((social) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons] ?? GitBranch;
              return <a key={social.name} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={social.name} className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[.035] text-white/65 transition hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:text-white"><Icon size={19} /></a>;
            })}
          </div>
        </motion.div>

        <motion.div initial={reduce ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1 }} className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute left-1/2 top-1/2 -z-10 size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/14 blur-[90px]" />
          <div className="relative mx-auto aspect-[4/5] w-[72%] overflow-hidden rounded-[50%_50%_46%_46%/42%_42%_58%_58%] border border-white/10 bg-[#111419] shadow-2xl">
            <div className="absolute inset-5 rounded-[inherit] border border-white/8" />
            <Image src="/images/profile-neutral.png" alt="Jolo A. Cañete profile portrait" fill priority sizes="(max-width: 1024px) 70vw, 38vw" className="object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0d10]/85 to-transparent" />
          </div>
          {tech.map(({ label, Icon, pos }, index) => (
            <motion.div key={label} className={`glass absolute ${pos} flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-bold shadow-xl`} animate={reduce ? {} : { y: [0, -8, 0] }} transition={{ duration: 4 + index * .35, repeat: Infinity, ease: "easeInOut", delay: index * .25 }}>
              <Icon size={17} className="text-[var(--accent)]" /><span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
