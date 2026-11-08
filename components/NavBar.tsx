"use client";
import { Menu, X, Command } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

const links = [["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["education", "Education"], ["contact", "Contact"]];
export default function NavBar() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState("about");
  useEffect(() => { const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-30% 0px -60% 0px" }); links.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); }); return () => obs.disconnect(); }, []);
  return <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-xl"><nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><a href="#top" className="font-display text-lg font-bold tracking-tight text-ink"><span className="text-primary">/</span> eman<span className="text-primary">.</span></a><div className="hidden items-center gap-5 md:flex">{links.map(([id, label]) => <a key={id} href={`#${id}`} className={`font-mono text-[11px] uppercase tracking-wider transition-colors ${active === id ? "text-primary" : "text-muted hover:text-primary"}`}>{label}</a>)}<ThemeToggle /><button onClick={() => window.dispatchEvent(new Event("open-command-palette"))} className="rounded-lg border border-line p-2 text-muted hover:border-primary hover:text-primary" aria-label="Open command palette"><Command size={15} /></button></div><div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button className="rounded-lg border border-line p-2 text-muted" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={18} /> : <Menu size={18} />}</button></div></nav>{open && <div className="border-t border-line bg-paper px-5 pb-5 md:hidden">{links.map(([id, label]) => <a key={id} onClick={() => setOpen(false)} href={`#${id}`} className="block border-b border-line/60 py-3 font-mono text-xs text-muted">{label}</a>)}<a href={site.github} target="_blank" rel="noreferrer" className="block pt-3 font-mono text-xs text-primary">GitHub ↗</a></div>}</header>;
}
