"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="page-enter">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 bg-dark-900 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Our Work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-3xl">
              Projects we&apos;re proud of
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
              A selection of recent new build roofing projects completed across the East Midlands and beyond. Each one delivered to the same exacting standard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─────────────────────────────────────── */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block bg-dark-800 border border-dark-600 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
                    {p.featured && (
                      <div className="absolute top-3 right-3 bg-gold-500 text-dark-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/80">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {p.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white group-hover:text-gold-400 transition-colors">{p.name}</h3>
                      {p.duration && (
                        <span className="text-xs text-neutral-500 border border-dark-500 px-2 py-0.5 rounded-full">
                          {p.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.services.map((srv) => (
                        <span
                          key={srv}
                          className="text-xs text-gold-400/80 bg-gold-500/5 border border-gold-500/10 px-2.5 py-1 rounded-full"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gold-400 font-medium group-hover:gap-2.5 transition-all">
                      View project
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-dark-800 border-t border-dark-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Want to see your project here?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              We&apos;d love to hear about your new build. Get in touch and let&apos;s make it happen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
