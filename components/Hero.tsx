export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            The No.1 Roofing Firm
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Premier Roofing
            <br />
            <span className="text-red-500">Solutions</span> for
            <br />
            New Builds
          </h1>

          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-10">
            Providing superior roofing solutions for your home or business. Trust our experienced team to deliver top-quality craftsmanship, exceptional service, and reliable results.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 pt-10 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100+", label: "Projects completed" },
            { value: "10+", label: "Years experience" },
            { value: "6", label: "Accreditations" },
            { value: "100%", label: "Client satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
