"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "New Builds",
    tagline: "Roofing from the ground up",
    desc: "Roofing for new builds, whether residential or commercial, involves the selection and installation of a roof system that provides protection, insulation, and aesthetics to the building. We work alongside developers and main contractors throughout the project lifecycle.",
    options: ["Metal Roofing", "Clay or Concrete Tiles", "Slate Roofing", "Synthetic Roofing Materials", "Green Roofing", "Flat Roofing Systems"],
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bfa31a6defc0a4753f77ac_DP%20New%20builds.png",
  },
  {
    title: "Refurbishments",
    tagline: "Breathe new life into existing roofs",
    desc: "Roofing for refurbishments involves the replacement or repair of an existing roof on a building. Whether overlay or complete strip and relay, we deliver durable, weatherproof results that extend the life of your property.",
    options: ["Roof Overlay Systems", "Complete Roof Replacement", "Structural Repairs", "Insulation Upgrades", "Guttering & Drainage", "Weatherproofing"],
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bfa28e655ee21e8c586076_DP%20Refurb.png",
  },
  {
    title: "Solar PV",
    tagline: "Clean energy, seamless installation",
    desc: "Roofing for solar photovoltaic systems involves integrating solar panels onto the roof of a building to generate electricity from sunlight. We work with approved solar providers to deliver clean energy solutions without compromising waterproofing or aesthetics.",
    options: ["Panel Integration", "Structural Assessment", "Waterproofing Details", "Cable Management", "Inverter Positioning", "Future Expansion Planning"],
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bf9e0cabf38b9e43989c5c_DP%20Solar%20Panel.png",
  },
  {
    title: "Lead Work",
    tagline: "Traditional craft, modern standards",
    desc: "Roofing with lead work involves the use of lead sheets or lead flashing to create weatherproof and durable roofing elements. Our skilled operatives carry out all forms of lead work to BS EN 12588 standards.",
    options: ["Lead Flashing", "Step Flashing", "Soakers", "Lead Gutters", "Decorative Domes", "Valley Linings"],
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bfa07850f5f7884b20c3ac_DP%20Lead%20Work.png",
  },
  {
    title: "Flat Roofing",
    tagline: "High-performance membrane systems",
    desc: "Single-ply membrane systems including TPO and PVC options for commercial and industrial buildings. Ideal for flat and low-slope roofs, our systems are fully warranted and installed by manufacturer-certified operatives.",
    options: ["TPO Membranes", "PVC Membranes", "GRP Fibreglass", "EPDM Rubber", "Warm Roof Systems", "Cold Roof Systems"],
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92d73/64bf9fd7e4f60e523a8bc901_DP%20Flat%20Roof.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="page-enter">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 bg-dark-900 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Our Services</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-3xl">
              Roofing built around your project
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
              From the first tile to final sign-off, we provide complete roofing services for new builds and refurbishments of all scales — residential, commercial, and industrial.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────── */}
      <div>
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <section
              key={s.title}
              className={`py-24 ${isEven ? "bg-dark-900" : "bg-dark-800"}`}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    !isEven ? "lg:flex lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <Reveal direction={isEven ? "right" : "left"}>
                    <div className="relative rounded-2xl overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        width={700}
                        height={500}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
                    </div>
                  </Reveal>

                  {/* Content */}
                  <div className={!isEven ? "lg:pr-12" : ""}>
                    <Reveal>
                      <span className="inline-block text-xs text-gold-400 font-semibold uppercase tracking-widest mb-3">
                        0{i + 1}
                      </span>
                    </Reveal>
                    <Reveal delay={0.05}>
                      <h2 className="text-4xl font-bold tracking-tight mb-2">{s.title}</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <p className="text-gold-400/70 text-sm mb-5">{s.tagline}</p>
                    </Reveal>
                    <Reveal delay={0.15}>
                      <p className="text-neutral-400 leading-relaxed mb-8">{s.desc}</p>
                    </Reveal>
                    <Reveal delay={0.2}>
                      <div className="grid grid-cols-2 gap-2">
                        {s.options.map((o) => (
                          <div key={o} className="flex items-center gap-2 text-sm text-neutral-400">
                            <div className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
                            {o}
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-dark-800 border-t border-dark-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Not sure which service you need?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Get in touch and our team will advise you on the best solution for your project.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Schedule a Meeting
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
