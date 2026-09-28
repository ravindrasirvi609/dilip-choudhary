import { navLinks, candidate } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ivory px-[8vw] py-8 text-[#8b8177]">
      {/* Top row */}
      <div className="mb-5 flex flex-col gap-5 border-b border-border-warm pb-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Identity */}
        <div>
          <strong className="block text-[13px] text-charcoal">{candidate.name}</strong>
          <span className="mt-0.5 block text-[11px] tracking-[.04em]">
            {candidate.role} · {candidate.panchayat} · {candidate.state}
          </span>
        </div>

        {/* Quick nav */}
        <nav aria-label="फुटर नेविगेशन" className="flex flex-wrap gap-5 text-[12px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col gap-2 text-[10px] tracking-[.05em] sm:flex-row sm:justify-between">
        <span>© 2026 {candidate.name}</span>
        <span>{candidate.panchayat} · {candidate.state}</span>
        <span>जन सेवा ही असली धर्म है</span>
      </div>
    </footer>
  );
}
