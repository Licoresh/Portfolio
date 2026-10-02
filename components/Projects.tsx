"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import { projects, type Project, type ProjectSection } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const sections: ProjectSection[] = ["First Projects", "Roblox Games", "College Projects"];
const filters: ("All" | ProjectSection)[] = ["All", ...sections];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const grouped = useMemo(() => sections
    .map((section) => ({ section, projects: projects.filter((project) => project.section === section) }))
    .filter((group) => group.projects.length > 0 && (filter === "All" || group.section === filter)), [filter]);

  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <SectionTitle eyebrow="Selected work" title="Featured Projects" description="A collection of projects, systems, websites, applications, school projects, and experiments I have worked on." />
        <div className="no-scrollbar -mx-1 mb-10 flex gap-2 overflow-x-auto px-1 pb-2" aria-label="Project filters">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${filter === item ? "border-[var(--accent)] bg-[var(--accent)] text-[#160b07]" : "border-white/10 bg-white/[.025] text-white/60 hover:text-white"}`}>{item}</button>)}</div>
        <div className="space-y-16">
          {grouped.map((group) => <div key={group.section}>
            <div className="mb-6 flex items-center gap-4"><h3 className="text-2xl font-black tracking-tight sm:text-3xl">{group.section}</h3><div className="h-px flex-1 bg-white/10" /></div>
            <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"><AnimatePresence mode="popLayout">{group.projects.map((project) => <ProjectCard key={project.title} project={project} onDetails={() => setSelected(project)} />)}</AnimatePresence></div>
          </div>)}
        </div>
      </div>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
