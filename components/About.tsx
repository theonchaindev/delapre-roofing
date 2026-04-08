export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h2 className="text-4xl font-bold text-neutral-900 tracking-tight mb-6">
              Your premier roofing solution for new builds
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Delapre Roofing is an independent roofing firm with a dedication to excellence and an unwavering commitment to quality. We specialise in new build roofing, working closely with developers, contractors, and homeowners to deliver exceptional results.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              From traditional pitched roofing to modern flat roofing systems and solar panel integration, our experienced team brings the same standard of craftsmanship to every project — on time and on budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Work with us
              </a>
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-400 px-5 py-2.5 rounded-lg transition-colors"
              >
                Our accreditations
              </a>
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "New Builds",
                desc: "Specialist roofing for residential and commercial new build developments.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                title: "Solar Integration",
                desc: "Seamless solar panel integration within new roofing designs.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                ),
                title: "Window Installs",
                desc: "Professional window installation as part of complete build packages.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                title: "Fully Accredited",
                desc: "CHAS, CSCS, Bauder, IKO, SIG, and Kemper certified professionals.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
                <div className="w-9 h-9 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
