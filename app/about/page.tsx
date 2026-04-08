"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "10k+", label: "Projects Completed" },
  { value: "50mi", label: "Service Radius" },
  { value: "40+", label: "Years Experience" },
];

const services = [
  { title: "New Builds", desc: "Residential and commercial roofing installation for new construction." },
  { title: "Refurbishments", desc: "Roof replacement and repair on existing structures." },
  { title: "Solar PV", desc: "Solar panel integration on roofing systems." },
  { title: "Lead Work", desc: "Lead sheet and flashing for weatherproofing." },
  { title: "Flat Roofing", desc: "Single-ply membrane systems for flat and low-slope roofs." },
];

const testimonials = [
  {
    name: "Alex Green",
    location: "Bedford",
    project: "Flat Roofing",
    quote: "Delapre Roofing completed our flat roof on time and to an exceptional standard. The team were professional and kept us informed at every stage.",
  },
  {
    name: "Martin Miller",
    location: "Brackley",
    project: "Roof Refurbishment",
    quote: "Brilliant roof refurbishment. Clean, efficient, and the quality of workmanship is outstanding. Would highly recommend to anyone.",
  },
  {
    name: "Julie Smith",
    location: "Northampton",
    project: "Commercial Roofing",
    quote: "Fantastic commercial roofing project delivered on schedule. Communication was excellent from the initial quote right through to completion.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 bg-dark-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">About Us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-3xl">
              The go-to roofing firm for developers & contractors
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
              Delapre Roofing is a premier roofing solutions provider specialising in new construction. We are the go-to roofing company for developers, contractors, and homeowners seeking top-notch roofing services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-dark-800 border-y border-dark-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">{s.value}</div>
                  <div className="text-sm text-neutral-500">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY ─────────────────────────────────────────────── */}
      <section className="py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative">
                <Image
                  src="https://cdn.prod.website-files.com/6495714d052e260635f92d73/64a6a14f2958e7393750cc52_Photo%2025-04-2023%2C%2008%2032%2035.jpg"
                  alt="Delapre Roofing team"
                  width={700}
                  height={500}
                  className="rounded-2xl w-full h-[480px] object-cover"
                />
                <div className="absolute -bottom-5 -right-5 w-28 h-28 border-r-2 border-b-2 border-gold-500/30 rounded-br-2xl" />
                <div className="absolute -top-5 -left-5 w-28 h-28 border-l-2 border-t-2 border-gold-500/30 rounded-tl-2xl" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Our Story</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Dedication to excellence in every project
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-neutral-400 leading-relaxed mb-5">
                  With over 40 years of combined experience, Delapre Roofing has built a reputation as the number one independent roofing firm in Northamptonshire. Our commitment to quality craftsmanship is at the heart of everything we do.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  We work exclusively with top-grade materials and certified systems — Bauder, IKO, Kemper, and SIG — to ensure every roof we install stands the test of time. Our team is CHAS and CSCS accredited, giving you complete confidence in the safety and professionalism of our work.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 active:scale-95 text-sm"
                >
                  Work with us
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES LIST ─────────────────────────────────────── */}
      <section className="py-28 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">What We Offer</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight mb-14">Our services</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="bg-dark-900 border border-dark-600 hover:border-gold-500/30 rounded-2xl p-6 transition-all hover:-translate-y-0.5">
                  <div className="w-8 h-8 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Client Reviews</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight mb-14">What our clients say</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-dark-800 border border-dark-600 rounded-2xl p-7 flex flex-col gap-5 h-full">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.location} · {t.project}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
