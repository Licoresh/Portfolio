import { GitBranch, Users, Mail } from "lucide-react";
import { socials } from "@/data/socials";

const icons = { GitHub: GitBranch, Facebook: Users, Email: Mail } as const;

export default function Footer() {
  return <footer className="border-t border-white/8 py-8"><div className="container-shell flex flex-col items-center justify-between gap-5 text-sm text-white/45 sm:flex-row"><p>© {new Date().getFullYear()} Jolo A. Cañete. All rights reserved.</p><div className="flex gap-2">{socials.map((social) => { const Icon = icons[social.name as keyof typeof icons] ?? GitBranch; return <a key={social.name} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={social.name} className="grid size-9 place-items-center rounded-lg hover:bg-white/5 hover:text-white"><Icon size={16} /></a>; })}</div></div></footer>;
}
