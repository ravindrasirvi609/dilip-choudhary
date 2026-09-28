import { candidate } from "@/lib/content";

export default function CommunityInvitation() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-[70px] block bg-gradient-to-br from-saffron to-[#f5a92e] px-[7vw] py-20 sm:scroll-mt-[82px] md:flex md:items-end md:justify-between md:px-[10vw] md:py-[115px]"
    >
      {/* Heading */}
      <div>
        <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-[#fff5dd]">
          आपका साथ ज़रूरी है
        </p>
        <h2
          id="contact-heading"
          className="m-0 text-[clamp(30px,8vw,61px)] font-bold leading-[1.05] tracking-[-.055em]"
        >
          आइए, मिलकर
          <br />
          <em className="text-white not-italic">बाणियावास बनाएं।</em>
        </h2>
      </div>

      {/* Invitation copy + contact */}
      <div className="mt-9 max-w-[260px] text-sm leading-[1.75] text-[#653417] md:mt-0">
        <p>
          आपके सुझाव, विचार और साथ हमारे लिए बहुत मायने रखते हैं। हमसे सीधे
          मिलें या अपनी बात पहुँचाएँ।
        </p>

        {/* Contact details — shown only when a verified number is available */}
        {candidate.phone ? (
          <a
            href={`tel:${candidate.phone}`}
            className="mt-[18px] inline-flex items-center rounded-[3px] bg-white px-[21px] py-4 text-xs font-bold text-charcoal transition-colors duration-150 hover:bg-sand"
          >
            संपर्क करें{" "}
            <span aria-hidden="true" className="ml-3 text-[17px]">↗</span>
          </a>
        ) : (
          /* Placeholder: remove this block and fill candidate.phone in lib/content.ts */
          <p className="mt-[18px] rounded border border-[#e09060]/40 bg-white/25 px-4 py-3 text-[12px] italic text-[#7a4520]">
            संपर्क विवरण शीघ्र उपलब्ध होंगे।
          </p>
        )}
      </div>
    </section>
  );
}
