import { candidate } from "@/lib/content";

const ways = [
  {
    step: "01",
    title: "अपनी बात साझा करें",
    body:
      "आपके गाँव में क्या बदलाव चाहिए? आपकी समस्याएँ और सुझाव हमारे लिए बेहद ज़रूरी हैं।",
  },
  {
    step: "02",
    title: "अभियान में साथ दें",
    body:
      "अपने परिवार, दोस्तों और पड़ोसियों को इस अभियान से जोड़ें — हर आवाज़ मायने रखती है।",
  },
  {
    step: "03",
    title: "हर वोट अहम है",
    body:
      "आपका एक वोट बाणियावास ग्राम पंचायत के बेहतर भविष्य की दिशा तय करेगा।",
  },
] as const;

export default function CommunityInvitation() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-[70px] sm:scroll-mt-[82px]"
    >
      {/* Ways to participate — sand background */}
      <div className="bg-sand px-[7vw] py-20 md:px-[8vw] md:py-[100px]">
        <div className="mb-12 md:flex md:items-end md:justify-between md:mb-[58px]">
          <div>
            <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-saffron">
              आप भी जुड़ें
            </p>
            <h2
              id="contact-heading"
              className="m-0 text-[clamp(30px,8vw,55px)] font-bold leading-[1.05] tracking-[-.055em]"
            >
              मिलकर बनाएँगे
              <br />
              <em className="text-saffron not-italic">अपना बाणियावास।</em>
            </h2>
          </div>
          <p className="mt-6 max-w-[240px] text-sm leading-[1.7] text-muted md:mr-[4%] md:mt-0">
            आपकी भागीदारी ही इस अभियान की असली ताकत है।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ways.map(({ step, title, body }) => (
            <div
              key={step}
              className="border border-border-warm bg-ivory p-6 transition-shadow duration-200 hover:shadow-[0_4px_20px_rgb(39_36_31_/_7%)]"
            >
              <span
                aria-hidden="true"
                className="text-[11px] font-bold text-saffron"
              >
                {step}
              </span>
              <div
                aria-hidden="true"
                className="my-4 h-px border-t border-border-warm"
              />
              <h3 className="mb-2 text-[16px] font-semibold leading-snug">
                {title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main CTA banner — saffron gradient */}
      <div className="block bg-gradient-to-br from-saffron to-[#f5a92e] px-[7vw] py-20 md:flex md:items-end md:justify-between md:px-[10vw] md:py-[100px]">
        <div>
          <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-[#fff5dd]">
            आपका साथ ज़रूरी है
          </p>
          <h2 className="m-0 text-[clamp(28px,7vw,55px)] font-bold leading-[1.07] tracking-[-.05em]">
            आइए, मिलकर
            <br />
            <em className="text-white not-italic">बाणियावास बनाएं।</em>
          </h2>
        </div>

        <div className="mt-9 max-w-[260px] text-sm leading-[1.75] text-[#653417] md:mt-0">
          <p>
            आपके सुझाव, विचार और साथ हमारे लिए बहुत मायने रखते हैं। हमसे
            सीधे मिलें या अपनी बात पहुँचाएँ।
          </p>

          {candidate.phone ? (
            <a
              href={candidate.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-[18px] inline-flex items-center rounded-[3px] bg-white px-[21px] py-4 text-xs font-bold text-charcoal transition-colors duration-150 hover:bg-sand"
            >
              <span aria-hidden="true" className="mr-2 text-base text-[#25D366]">◉</span>
              WhatsApp पर संपर्क करें{" "}
              <span aria-hidden="true" className="ml-3 text-[17px]">↗</span>
            </a>
          ) : (
            <p className="mt-[18px] rounded border border-[#e09060]/40 bg-white/25 px-4 py-3 text-[12px] italic text-[#7a4520]">
              संपर्क विवरण शीघ्र उपलब्ध होंगे।
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
