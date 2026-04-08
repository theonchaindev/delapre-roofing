"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-enter">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 bg-dark-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Let&apos;s talk about
              <br />
              <span className="text-gold-400">your project</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
              For professional and reliable roofing services, contact us today. Our team will get back to you promptly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ───────────────────────────────────── */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left — details */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight mb-8">Contact Details</h2>
              </Reveal>

              <div className="space-y-6">
                {[
                  {
                    label: "Phone",
                    value: "+44 7772 123254",
                    href: "tel:+447772123254",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Email",
                    value: "office@delapreroofing.com",
                    href: "mailto:office@delapreroofing.com",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                  },
                  {
                    label: "Area",
                    value: "Northamptonshire & surrounding areas",
                    href: null,
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <Reveal key={item.label} delay={i * 0.1}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-dark-700 border border-dark-600 group-hover:border-gold-500/30 text-gold-400 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                        {item.icon}
                      </div>
                      <div className="pt-1">
                        <div className="text-xs text-neutral-600 mb-0.5 uppercase tracking-wider">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-neutral-300 hover:text-gold-400 transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm text-neutral-300 font-medium">{item.value}</span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Social */}
              <Reveal delay={0.35}>
                <div className="mt-10 pt-8 border-t border-dark-600">
                  <p className="text-xs text-neutral-600 uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { label: "Twitter", href: "https://twitter.com", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                      { label: "Instagram", href: "https://instagram.com", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                      { label: "LinkedIn", href: "https://linkedin.com", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-dark-700 border border-dark-600 hover:border-gold-500/30 text-neutral-500 hover:text-gold-400 rounded-lg flex items-center justify-center transition-all"
                        aria-label={s.label}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="bg-dark-800 border border-dark-600 rounded-2xl p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message sent</h3>
                      <p className="text-neutral-400 text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold mb-6">Send us a message</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">First name</label>
                            <input
                              type="text"
                              placeholder="John"
                              required
                              className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Last name</label>
                            <input
                              type="text"
                              placeholder="Smith"
                              required
                              className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Email address</label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Company name</label>
                          <input
                            type="text"
                            placeholder="Your company (optional)"
                            className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Message</label>
                          <textarea
                            rows={5}
                            placeholder="Tell us about your project..."
                            required
                            className="w-full bg-dark-900 border border-dark-500 focus:border-gold-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="newsletter"
                            className="mt-0.5 accent-yellow-500"
                          />
                          <label htmlFor="newsletter" className="text-xs text-neutral-500 leading-relaxed">
                            I agree to receive newsletters and updates from Delapre Roofing.
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gold-500 hover:bg-gold-400 text-dark-900 font-semibold py-3.5 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99] text-sm"
                        >
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
