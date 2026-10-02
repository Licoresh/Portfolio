"use client";

import Image from "next/image";
import { ExternalLink, Gamepad2, GitBranch, Eye } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import useSafeReducedMotion from "./useSafeReducedMotion";

export default function ProjectCard({ project, onDetails }: { project: Project; onDetails: () => void }) {
  const reduce = useSafeReducedMotion();
  return (
    <motion.article layout initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} whileHover={reduce ? {} : { y: -7 }} className="group glass flex h-full flex-col overflow-hidden rounded-[26px]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#141820]">
        <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.045]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <span className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] truncate rounded-full border border-white/15 bg-[#11151c]/85 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.08em] text-white/85 shadow-lg backdrop-blur-md">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-black tracking-tight">{project.title}</h3>
        <p className="muted mt-3 line-clamp-3 min-h-[72px] text-sm leading-6">{project.description}</p>
        <div className="mb-6 mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-white/[.055] px-2.5 py-1 text-[11px] font-bold text-white/65">{tech}</span>)}</div>
        <div className="mt-auto flex flex-wrap gap-2 border-t border-white/8 pt-5">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-bold hover:border-white/25 hover:bg-white/5"><GitBranch size={16} /> GitHub</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-bold hover:border-white/25 hover:bg-white/5"><ExternalLink size={16} /> Live Demo</a>}
          {project.play && <a href={project.play} target="_blank" rel="noopener noreferrer" aria-label={`Play ${project.title}`} className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-[var(--accent)] px-3 py-2 text-xs font-black text-[#160b07] transition hover:brightness-110"><Gamepad2 size={16} /> Play Game</a>}
          <button onClick={onDetails} className="ml-auto inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-bold transition hover:border-white/25 hover:bg-white/5"><Eye size={16} /> Details</button>
        </div>
      </div>
    </motion.article>
  );
}
