const certs = ["Bauder", "CHAS", "IKO", "SIG", "Kemper", "CSCS"];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">Accreditations</p>
          <h2 className="text-2xl font-bold text-neutral-900">Certified and trusted</h2>
          <p className="text-neutral-500 text-sm mt-2 max-w-md mx-auto">
            Our team holds industry-recognised certifications, giving you peace of mind on every project.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((cert) => (
            <div
              key={cert}
              className="bg-white border border-neutral-200 rounded-xl px-8 py-5 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-semibold text-neutral-900 text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
