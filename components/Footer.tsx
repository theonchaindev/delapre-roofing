const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-red-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L2 8h2v10h4v-6h4v6h4V8h2L10 2z" />
              </svg>
            </span>
            <span className="font-semibold text-white tracking-tight">Delapre Roofing</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a href="tel:+447772123254" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              +44 7772 123254
            </a>
            <a href="mailto:office@delapreroofing.com" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              office@delapreroofing.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">© 2024 Delapre Roofing. All rights reserved.</p>
          <p className="text-xs text-neutral-700">The No.1 Roofing Firm · Northamptonshire</p>
        </div>
      </div>
    </footer>
  );
}
