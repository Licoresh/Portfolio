"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, GitBranch, ExternalLink, CheckCircle2, Gamepad2 } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const dialog = closeRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); prev?.focus(); };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => { if (e.currentTarget === e.target) onClose(); }}>
      <motion.div initial={{ opacity: 0, y: 22, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .985 }} className="glass no-scrollbar max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-[#0f1217]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/8 bg-[#0f1217]/90 px-5 py-4 backdrop-blur-xl sm:px-7"><div><p className="eyebrow">Project Details</p><h3 id="project-modal-title" className="mt-1 text-xl font-black sm:text-2xl">{project.title}</h3></div><button ref={closeRef} onClick={onClose} aria-label="Close project details" className="grid size-11 place-items-center rounded-xl border border-white/10 hover:bg-white/5"><X size={20} /></button></div>
        <div className="p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">{project.screenshots.map((src, i) => <div key={`${src}-${i}`} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8 bg-white/[.03]"><Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /></div>)}</div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div className="space-y-7">
              {project.overview && <Detail title="Overview" text={project.overview} />}
              {project.problem && <Detail title="Problem" text={project.problem} />}
              {project.solution && <Detail title="Solution" text={project.solution} />}
              {project.challenges && <Detail title="Challenges" text={project.challenges} />}
            </div>
            <div><div className="rounded-2xl border border-white/8 bg-white/[.025] p-5">{project.features?.length ? <><h4 className="font-black">Features</h4><ul className="mt-4 space-y-3">{project.features.map((f) => <li key={f} className="flex gap-3 text-sm text-white/70"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[var(--accent)]" />{f}</li>)}</ul></> : null}<h4 className={project.features?.length ? "mt-7 font-black" : "font-black"}>Technologies</h4><div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((t) => <span key={t} className="rounded-full bg-white/6 px-3 py-1.5 text-xs font-bold">{t}</span>)}</div></div><div className="mt-4 flex flex-wrap gap-3">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 font-bold hover:bg-white/5"><GitBranch size={17} /> GitHub</a>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 font-black text-[#160b07]"><ExternalLink size={17} /> Live Demo</a>}{project.play && <a href={project.play} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 font-black text-[#160b07]"><Gamepad2 size={17} /> Play Game</a>}</div></div>
          </div>
          {project.demoAccounts?.length ? <div className="mt-8 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/[.045] p-5 sm:p-6"><div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Prototype Access</p><h4 className="mt-1 text-lg font-black">Demo Accounts</h4></div><p className="text-xs font-semibold text-white/50">Development/demo credentials only — not production accounts.</p></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[560px] border-separate border-spacing-0 text-left text-sm"><thead><tr className="text-xs uppercase tracking-wider text-white/45"><th className="border-b border-white/10 px-3 py-3 font-bold">Role</th><th className="border-b border-white/10 px-3 py-3 font-bold">Email</th><th className="border-b border-white/10 px-3 py-3 font-bold">Password</th></tr></thead><tbody>{project.demoAccounts.map((account) => <tr key={account.role} className="text-white/75"><td className="border-b border-white/6 px-3 py-3 font-bold text-white">{account.role}</td><td className="border-b border-white/6 px-3 py-3"><code className="rounded bg-black/25 px-2 py-1 text-xs">{account.email}</code></td><td className="border-b border-white/6 px-3 py-3"><code className="rounded bg-black/25 px-2 py-1 text-xs">{account.password}</code></td></tr>)}</tbody></table></div></div> : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return <div><h4 className="text-lg font-black">{title}</h4><p className="muted mt-2 leading-7">{text}</p></div>;
}
