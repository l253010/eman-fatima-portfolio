"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="mb-10 max-w-2xl"><p className="font-mono text-xs uppercase tracking-[.18em] text-primary">{label}</p><h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>{copy && <p className="mt-4 leading-7 text-muted">{copy}</p>}</div>;
}
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
export function CursorSpotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const move = (event: PointerEvent) => { const r = node.getBoundingClientRect(); node.style.setProperty("--spot-x", `${event.clientX - r.left}px`); node.style.setProperty("--spot-y", `${event.clientY - r.top}px`); }; node.addEventListener("pointermove", move); return () => node.removeEventListener("pointermove", move); }, []);
  return <div ref={ref} className={`spotlight ${className}`}>{children}</div>;
}
export function Magnetic({ children, className = "", href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null); const reduce = useReducedMotion();
  return <a ref={ref} href={href} className={className} onPointerMove={(e) => { if (reduce || !ref.current) return; const r = ref.current.getBoundingClientRect(); ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .08}px, ${(e.clientY - r.top - r.height / 2) * .08}px)`; }} onPointerLeave={() => { if (ref.current) ref.current.style.transform = ""; }}>{children}</a>;
}
export function useCopy() { const [copied, setCopied] = useState(false); const copy = async (value: string) => { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }; return { copied, copy }; }
