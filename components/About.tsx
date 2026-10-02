import { MapPin, Mail, Phone, UserRound, GitBranch, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const info = [
  [UserRound, "Name", "Jolo A. Cañete"], [MapPin, "Location", "Iligan City"], [Mail, "Email", "canetejolo0@gmail.com"],
  [Phone, "Phone", "09203513491"], [GitBranch, "GitHub", "github.com/Licoresh"],
] as const;

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-white/[.055]">
      <div className="container-shell">
        <Reveal><SectionTitle eyebrow="Get to know me" title="About Me" /></Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="glass rounded-[28px] p-7 sm:p-9">
            <div className="space-y-5">
              <div className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/[.06] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3 text-[var(--accent)]">
                  <div className="grid size-10 place-items-center rounded-xl bg-[var(--accent)]/12"><GraduationCap size={21} /></div>
                  <p className="text-xs font-black uppercase tracking-[.18em]">Academic Background</p>
                </div>
                <p className="text-xl font-black text-white sm:text-2xl">BS Information Systems <span className="text-[var(--accent)]">•</span> 3rd Year</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/65 sm:text-base">Mindanao State University – Iligan Institute of Technology</p>
              </div>
              <p className="muted text-base leading-8 sm:text-lg">Based in Iligan City, I enjoy turning ideas into practical and engaging digital products. I build responsive websites, management systems, interactive prototypes, and Roblox experiences with a focus on clean design and straightforward user journeys.</p>
              <p className="muted text-base leading-8 sm:text-lg">I enjoy learning new technologies, solving problems through code, and improving a project one detail at a time. Whether I’m working on a community-focused platform or experimenting with game mechanics, my goal is to create work that feels useful, accessible, and enjoyable to use.</p>
            </div>
          </Reveal>
          <Reveal className="grid gap-3 sm:grid-cols-2">
            {info.map(([Icon, label, value], index) => <div key={label} className={`glass rounded-2xl p-5 ${index === info.length - 1 ? "sm:col-span-2" : ""}`}><Icon className="mb-4 text-[var(--accent)]" size={22} /><p className="text-xs font-bold uppercase tracking-[.16em] text-white/40">{label}</p><p className="mt-1 font-bold">{value}</p></div>)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
