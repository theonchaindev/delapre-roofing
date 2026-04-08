const services = [
  {
    title: "New Build Roofing",
    desc: "Complete roofing systems for residential and commercial new builds, from pitched tiles to flat membrane systems. We work alongside developers and main contractors to deliver on schedule.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
  },
  {
    title: "Window Installation",
    desc: "Professional supply and installation of windows as part of new build projects. We ensure a seamless fit with the roofline and surrounding structure, achieving a clean, finished result.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
      </svg>
    ),
  },
  {
    title: "Solar Panel Integration",
    desc: "We integrate solar photovoltaic systems directly into new roofing designs, working with approved solar providers to deliver clean energy solutions that don't compromise waterproofing or aesthetics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            Roofing services built around your project
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            From the first tile to final sign-off, we provide end-to-end roofing services for new build projects of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-red-600/40 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-600/10 text-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <div className="text-xs text-neutral-600 font-mono mb-2">0{i + 1}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Who we work with */}
        <div className="mt-16 pt-12 border-t border-neutral-800">
          <p className="text-neutral-500 text-sm mb-6">We work with</p>
          <div className="flex flex-wrap gap-3">
            {["Developers", "Main Contractors", "Homeowners", "Housing Associations", "Commercial Clients"].map(
              (client) => (
                <span
                  key={client}
                  className="text-sm text-neutral-300 border border-neutral-700 px-4 py-2 rounded-full"
                >
                  {client}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
