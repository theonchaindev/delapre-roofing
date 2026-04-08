"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const stats = [
  { value: "10k+", label: "Projects Completed" },
  { value: "50mi", label: "Service Radius" },
  { value: "40+", label: "Years Experience" },
  { value: "6", label: "Accreditations" },
];

const services = [
  {
    title: "New Builds",
    desc: "Complete roofing systems for residential and commercial new builds. We work alongside developers and main contractors to deliver on time.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bfa31a6defc0a4753f77ac_DP%20New%20builds.png",
  },
  {
    title: "Refurbishments",
    desc: "Roof replacement and repair on existing structures, from overlay systems to full strip and relay.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bfa28e655ee21e8c586076_DP%20Refurb.png",
  },
  {
    title: "Solar PV",
    desc: "Seamless solar panel integration within roofing designs — clean energy without compromising your roof.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bf9e0cabf38b9e43989c5c_DP%20Solar%20Panel.png",
  },
];

const certs = ["Bauder", "CHAS", "IKO", "SIG", "Kemper", "CSCS"];

const testimonials = [
  {
    name: "Alex Green",
    location: "Bedford",
    quote: "Delapre Roofing completed our flat roof on time and to an exceptional standard. The team were professional and kept us informed throughout.",
  },
  {
    name: "Martin Miller",
    location: "Brackley",
    quote: "Brilliant roof refurbishment. Clean, efficient, and the quality of workmanship is outstanding. Would highly recommend.",
  },
  {
    name: "Julie Smith",
    location: "Northampton",
    quote: "Fantastic commercial roofing project delivered on schedule. Communication was excellent from start to finish.",
  },
];

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export default function HomePage() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg"
            alt="Roofing project background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-dark-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/70 to-dark-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-dark-900/40" />
        </div>

        {/* Gold glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/6 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-40 pt-48 w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            The No.1 Roofing Firm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-8 max-w-4xl"
          >
            Premier Roofing
            <br />
            <span className="text-gold-400">Solutions</span> for
            <br />
            New Builds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-neutral-300 max-w-lg leading-relaxed mb-10"
          >
            Providing superior roofing solutions for your home or business. Trust our experienced team to deliver top-quality craftsmanship, exceptional customer service, and reliable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold px-6 py-3.5 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-gold-500/50 text-white hover:text-gold-400 font-medium px-6 py-3.5 rounded-lg transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">{s.value}</div>
                <div className="text-sm text-neutral-400">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ──────────────────────────────────────── */}
      <section className="py-28 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">About Us</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Your premier roofing solution for new builds
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Delapre Roofing is an independent roofing firm dedicated to excellence and an unwavering commitment to quality. We specialise in new build roofing, working closely with developers, contractors, and homeowners to deliver outstanding results.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  From pitched tiling to flat membrane systems and solar integration, our experienced team brings the same standard of craftsmanship to every project — on time and on budget.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors group"
                >
                  Learn more about us
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.1}>
              <div className="relative">
                <Image
                  src="https://cdn.prod.website-files.com/6495714d052e260635f92d73/64a6a14f2958e7393750cc52_Photo%2025-04-2023%2C%2008%2032%2035.jpg"
                  alt="Delapre Roofing team at work"
                  width={700}
                  height={500}
                  className="rounded-2xl object-cover w-full h-[420px]"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold-500/40 rounded-br-2xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold-500/40 rounded-tl-2xl" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─────────────────────────────────── */}
      <section className="py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <Reveal>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Services</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What We Do</h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} direction="right">
              <Link href="/services" className="text-sm text-neutral-400 hover:text-gold-400 transition-colors flex items-center gap-2 group">
                All services
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <Link
                  href="/services"
                  className="group block bg-dark-800 border border-dark-600 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">{s.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="py-28 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <Reveal>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Featured Projects</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Work we&apos;re proud of</h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} direction="right">
              <Link href="/projects" className="text-sm text-neutral-400 hover:text-gold-400 transition-colors flex items-center gap-2 group">
                All projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block bg-dark-900 border border-dark-600 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image src={p.img} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-xs text-white/70 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {p.location}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white group-hover:text-gold-400 transition-colors mb-1">{p.name}</h3>
                    <p className="text-xs text-neutral-500 line-clamp-2 mb-3">{p.desc}</p>
                    <span className="text-xs text-gold-400 font-medium flex items-center gap-1.5">
                      View project
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Testimonials</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">What our clients say</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-dark-800 border border-dark-600 rounded-2xl p-7 flex flex-col gap-5">
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
                    <div className="text-xs text-neutral-500">{t.location}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────── */}
      <section className="py-20 bg-dark-800 border-y border-dark-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-center text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-10">
              Certified & Accredited
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {certs.map((c) => (
                <div key={c} className="bg-dark-700 border border-dark-500 hover:border-gold-500/30 px-6 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-gold-400 transition-all cursor-default">
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── GET A QUOTE ──────────────────────────────────────── */}
      <section id="quote" className="py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <Reveal>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Free Quote</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Get a quote for your project
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-neutral-400 leading-relaxed mb-10">
                  Tell us about your project and we&apos;ll get back to you with a competitive, no-obligation quote. Most enquiries are responded to within one working day.
                </p>
              </Reveal>

              {/* Why choose us */}
              <div className="space-y-5">
                {[
                  { title: "No obligation", desc: "Our quotes are free with absolutely no pressure to proceed." },
                  { title: "Fast response", desc: "We aim to respond to all enquiries within one working day." },
                  { title: "Transparent pricing", desc: "Detailed, itemised quotes with no hidden costs." },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={0.25 + i * 0.08}>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gold-500/10 border border-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm mb-0.5">{item.title}</div>
                        <div className="text-sm text-neutral-500">{item.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <Reveal delay={0.15}>
              <div className="bg-dark-800 border border-dark-600 rounded-2xl p-8">
                {quoteSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quote request sent</h3>
                    <p className="text-neutral-400 text-sm">We&apos;ll be in touch within one working day.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold text-white mb-6">Your details</h3>
                    <form
                      onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">First name</label>
                          <input type="text" placeholder="John" required className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Last name</label>
                          <input type="text" placeholder="Smith" required className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Email address</label>
                        <input type="email" placeholder="john@example.com" required className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors" />
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Phone number</label>
                        <input type="tel" placeholder="+44 7700 000000" className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors" />
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Project type</label>
                        <select className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors appearance-none">
                          <option value="">Select a service</option>
                          <option>New Build Roofing</option>
                          <option>Refurbishment</option>
                          <option>Solar PV Integration</option>
                          <option>Lead Work</option>
                          <option>Flat Roofing</option>
                          <option>Window Installation</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Project details</label>
                        <textarea rows={4} placeholder="Tell us about your project — location, scale, timescales..." required className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none" />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold py-3.5 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99] text-sm"
                      >
                        Request a Quote
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
