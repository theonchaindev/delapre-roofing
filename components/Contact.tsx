export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl font-bold text-neutral-900 tracking-tight mb-6">
              Let's talk about your project
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-10">
              Whether you're a developer, contractor, or homeowner, get in touch with our team to discuss your roofing requirements. We'll provide honest advice and a competitive quote.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+447772123254"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-red-50 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 mb-0.5">Phone</div>
                  <div className="font-medium text-neutral-900">+44 7772 123254</div>
                </div>
              </a>

              <a
                href="mailto:office@delapreroofing.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-red-50 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 mb-0.5">Email</div>
                  <div className="font-medium text-neutral-900">office@delapreroofing.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-neutral-50 text-neutral-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 mb-0.5">Area served</div>
                  <div className="font-medium text-neutral-900">Northamptonshire & surrounding areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
            <h3 className="font-semibold text-neutral-900 mb-6">Send us a message</h3>
            <form className="space-y-4" action="mailto:office@delapreroofing.com" method="get">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+44 7700 000000"
                  className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">Project details</label>
                <textarea
                  name="body"
                  rows={4}
                  placeholder="Tell us about your project — type, location, timescales..."
                  className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors text-sm"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
