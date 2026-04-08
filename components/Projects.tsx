const projects = [
  {
    name: "Union View",
    location: "Northamptonshire, UK",
    type: "New Build Roofing",
    duration: null,
    highlight: true,
  },
  {
    name: "Project Henlow",
    location: "Bedfordshire",
    type: "Roofing & Window Installation",
    duration: "2–3 months",
    highlight: false,
  },
  {
    name: "Project Rushden",
    location: "Northamptonshire",
    type: "Property Roofing",
    duration: "1–2 months",
    highlight: false,
  },
  {
    name: "Project Corby",
    location: "Northamptonshire",
    type: "New Build + Solar Integration",
    duration: "1–2 months",
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">Latest Projects</p>
            <h2 className="text-4xl font-bold text-neutral-900 tracking-tight">
              Work we're proud of
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
            A selection of recent new build roofing projects completed across the East Midlands and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border flex flex-col gap-3 ${
                p.highlight
                  ? "bg-neutral-950 border-neutral-800 text-white"
                  : "bg-neutral-50 border-neutral-100 text-neutral-900"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      p.highlight ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`text-sm flex items-center gap-1.5 ${
                      p.highlight ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {p.location}
                  </p>
                </div>
                {p.highlight && (
                  <span className="text-xs bg-red-600 text-white px-2.5 py-1 rounded-full font-medium">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    p.highlight
                      ? "border-neutral-700 text-neutral-300"
                      : "border-neutral-200 text-neutral-600"
                  }`}
                >
                  {p.type}
                </span>
                {p.duration && (
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      p.highlight
                        ? "border-neutral-700 text-neutral-300"
                        : "border-neutral-200 text-neutral-600"
                    }`}
                  >
                    {p.duration}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
