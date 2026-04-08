"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  {
    name: "Project Henlow",
    location: "Henlow, Bedfordshire",
    type: "New Build",
    services: ["Roofing", "Window Installation"],
    duration: "2–3 months",
    desc: "A roofing project with a new window installation, enhancing both the appearance and functionality of the property. Full pitched roof system with integrated VELUX windows and lead detailing throughout.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
    featured: true,
  },
  {
    name: "Project Rushden",
    location: "Rushden, Northamptonshire",
    type: "New Build",
    services: ["Property Roofing"],
    duration: "1–2 months",
    desc: "A completed roofing project for a new build property, ensuring long-term durability and protection from the elements. Clay tile system with full lead flashings and ridge work.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6764dec5ec7c14be04350_DR_P3_01.jpg",
    featured: false,
  },
  {
    name: "Project Corby",
    location: "Corby, Northamptonshire",
    type: "New Build",
    services: ["Roofing", "Solar Integration"],
    duration: "1–2 months",
    desc: "Exceptional skills demonstrated in a new build project, seamlessly integrating solar panels within the roofing design to promote sustainability without compromising aesthetics.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6703ef0bec4b9baa1f0a0_DR_P2_01.jpg",
    featured: false,
  },
  {
    name: "Project Northampton",
    location: "Northampton, Northamptonshire",
    type: "New Build",
    services: ["Roofing", "Window Installation"],
    duration: "1–2 months",
    desc: "A roofing project that also involved installing new windows, improving the property's aesthetics and energy performance. Full system with thermal insulation and airtight detailing.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d676654056998f9a78ba26_DR_P4_01.jpg",
    featured: false,
  },
  {
    name: "Project Bedfordshire",
    location: "Bedfordshire",
    type: "New Build",
    services: ["Solar Panel Installation"],
    duration: "1–2 months",
    desc: "Installed solar panels on a property's roof, promoting sustainability and reducing energy costs. A fully integrated photovoltaic system designed around the existing roof structure.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6767c9bec4b57edf30ace_DR_P5_01.jpg",
    featured: false,
  },
  {
    name: "Union View",
    location: "Northamptonshire, UK",
    type: "New Build",
    services: ["Full Roofing Package"],
    duration: null,
    desc: "A flagship new build roofing project demonstrating our full capabilities — from structural roof systems to final weatherproofing details. Our most comprehensive project to date.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
    featured: true,
  },
];

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
              <Reveal key={p.name} delay={i * 0.07}>
                <div className="group bg-dark-800 border border-dark-600 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
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
                    {/* Location overlay */}
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
                      <h3 className="font-semibold text-white">{p.name}</h3>
                      {p.duration && (
                        <span className="text-xs text-neutral-500 border border-dark-500 px-2 py-0.5 rounded-full">
                          {p.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.services.map((srv) => (
                        <span
                          key={srv}
                          className="text-xs text-gold-400/80 bg-gold-500/5 border border-gold-500/10 px-2.5 py-1 rounded-full"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
              We'd love to hear about your new build. Get in touch and let's make it happen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
