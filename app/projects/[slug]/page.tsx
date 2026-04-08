"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { projects, getProject } from "@/lib/projects";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = getProject(slug);

  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="page-enter">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src={project.img}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-gold-400 transition-colors mb-6 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 border border-gold-500/30 bg-gold-500/5 px-3 py-1 rounded-full">
                {project.type}
              </span>
              {project.featured && (
                <span className="text-xs font-semibold uppercase tracking-widest text-dark-900 bg-gold-500 px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">{project.name}</h1>

            <p className="text-neutral-400 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {project.location}
              {project.duration && <span className="text-neutral-600 mx-2">·</span>}
              {project.duration && <span>{project.duration}</span>}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── OVERVIEW ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">Overview</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">{project.longDesc}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-3">Scope of Works</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{project.scope}</p>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Services */}
              <Reveal delay={0.1}>
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span key={s} className="text-xs text-gold-600 bg-gold-500/5 border border-gold-400/20 px-2.5 py-1 rounded-full font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Materials */}
              <Reveal delay={0.15}>
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Materials Used</h3>
                  <ul className="space-y-2">
                    {project.materials.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-sm text-neutral-600">
                        <div className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Outcome */}
              <Reveal delay={0.2}>
                <div className="bg-gold-500/5 border border-gold-400/20 rounded-2xl p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">Outcome</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{project.outcome}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ───────────────────────────────────────────── */}
      {project.gallery.length > 1 && (
        <section className="pb-20 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-8">Gallery</p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative h-52 md:h-64 rounded-xl overflow-hidden group">
                    <Image
                      src={img}
                      alt={`${project.name} image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── RELATED PROJECTS ──────────────────────────────────── */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">More Projects</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-10">Related work</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block bg-white border border-neutral-200 hover:border-gold-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-neutral-900 text-sm mb-1 group-hover:text-gold-600 transition-colors">{p.name}</h3>
                    <p className="text-xs text-neutral-400">{p.location}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Start your project</h2>
              <p className="text-neutral-400">Let&apos;s discuss how we can deliver the same quality on your build.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-semibold px-7 py-3.5 rounded-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
