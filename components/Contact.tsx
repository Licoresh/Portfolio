"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";

const contactItems = [
  { Icon: Mail, label: "Email", value: "canetejolo0@gmail.com", href: "mailto:canetejolo0@gmail.com" },
  { Icon: Phone, label: "Phone", value: "09203513491", href: "tel:09203513491" },
  { Icon: MapPin, label: "Location", value: "Iligan City" },
] as const;

export default function Contact() {
  const [status, setStatus] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus("Form validated. Connect this form to Resend, EmailJS, Formspree, or a Next.js route to send messages.");
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <SectionTitle eyebrow="Contact" title="Let's Work Together" description="Have a project, collaboration, or opportunity in mind? Feel free to contact me." />
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="space-y-3">{contactItems.map(({ Icon, label, value, ...item }) => <div key={label} className="glass flex items-center gap-4 rounded-2xl p-5"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--accent)]/12 text-[var(--accent)]"><Icon size={20} /></div><div><p className="text-xs font-bold uppercase tracking-[.14em] text-white/40">{label}</p>{"href" in item ? <a href={item.href} className="mt-1 block font-bold transition hover:text-[var(--accent)]">{value}</a> : <p className="mt-1 font-bold">{value}</p>}</div></div>)}</div>
          <form onSubmit={submit} className="glass rounded-[28px] p-6 sm:p-8" noValidate>
            <div className="grid gap-4 sm:grid-cols-2"><Field label="Name" name="name" type="text" placeholder="Your name" /><Field label="Email" name="email" type="email" placeholder="you@example.com" /></div>
            <div className="mt-4"><Field label="Subject" name="subject" type="text" placeholder="Project inquiry" /></div>
            <label className="mt-4 block text-sm font-bold">Message<textarea name="message" required minLength={10} rows={6} placeholder="Tell me about your project..." className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-white placeholder:text-white/28 outline-none transition focus:border-[var(--accent)]" /></label>
            <button type="submit" className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 font-black text-[#160b07] transition hover:-translate-y-0.5 hover:brightness-110"><Send size={17} /> Send Message</button>
            {status && <p role="status" className="mt-4 text-sm leading-6 text-white/55">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) {
  return <label className="block text-sm font-bold">{label}<input name={name} type={type} required minLength={2} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-white placeholder:text-white/28 outline-none transition focus:border-[var(--accent)]" /></label>;
}
