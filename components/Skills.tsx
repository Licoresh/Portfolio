import { Code2, ServerCog, Database, Wrench } from "lucide-react";
import { skills } from "@/data/skills";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const icons = [Code2, ServerCog, Database, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-white/[.015]">
      <div className="container-shell">
        <Reveal><SectionTitle eyebrow="Toolbox" title="Skills & Technologies" description="A practical toolkit for building modern products, systems, interfaces, and experiments." /></Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = icons[i] ?? Code2;
            return <Reveal key={group.category} className="glass rounded-[26px] p-6 transition hover:-translate-y-1 hover:border-white/15"><div className="mb-5 grid size-11 place-items-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)]"><Icon size={22} /></div><h3 className="text-xl font-black">{group.category}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="rounded-full border border-white/9 bg-white/[.035] px-3 py-1.5 text-sm font-semibold text-white/72">{skill}</span>)}</div></Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
