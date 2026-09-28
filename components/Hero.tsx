import Image from "next/image";
import { candidate } from "@/lib/content";

export default function Hero() {
  return (
    <section
      aria-label="परिचय"
      className="grid min-h-[690px] grid-cols-1 overflow-hidden bg-[linear-gradient(180deg,var(--color-ivory)_0%,var(--color-ivory)_54%,var(--color-sand-deep)_54%,#f9eee2_100%)] px-5 pt-14 sm:px-[7vw] md:grid-cols-[48%_52%] md:bg-[linear-gradient(110deg,var(--color-ivory)_0%,var(--color-ivory)_54%,var(--color-sand-deep)_54%,#f9eee2_100%)] md:pt-[82px]"
    >
      {/* Left — text content */}
      <div className="z-10 self-center pb-9 md:pb-[65px]">
        <p
          className="animate-fade-rise mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-saffron [animation-delay:0ms]"
        >
          <i
            aria-hidden="true"
            className="mr-2.5 inline-block w-7 border-t-2 border-saffron align-middle"
          />
          सरपंच पद के उम्मीदवार
        </p>

        <h1
          className="animate-fade-rise m-0 text-[clamp(42px,12vw,78px)] font-bold leading-[.99] tracking-[-.055em] [animation-delay:80ms]"
        >
          आपका साथ,
          <br />
          <em className="text-saffron not-italic">हमारा संकल्प।</em>
        </h1>

        <p
          className="animate-fade-rise my-6 max-w-[430px] text-[15px] leading-[1.75] text-muted [animation-delay:160ms] sm:my-7 sm:text-[16px]"
        >
          बाणियावास ग्राम पंचायत के हर गाँव को स्वच्छ, सशक्त और समृद्ध बनाने की
          दिशा में — मिलकर, एक नई शुरुआत।
        </p>

        <div
          className="animate-fade-rise flex flex-wrap items-center gap-5 [animation-delay:240ms] sm:gap-7"
        >
          <a
            href="#vision"
            className="inline-flex items-center rounded-[3px] bg-charcoal px-4 py-3.5 text-xs font-bold text-white transition-colors duration-150 hover:bg-[#3a362f] sm:px-[21px] sm:py-4"
          >
            हमारा विज़न{" "}
            <span aria-hidden="true" className="ml-2 text-[17px] sm:ml-3">↗</span>
          </a>
          <a
            href="#villages"
            className="text-xs text-muted transition-colors duration-150 hover:text-charcoal"
          >
            गाँव देखें{" "}
            <span aria-hidden="true" className="ml-2 text-[16px] text-saffron">↓</span>
          </a>
        </div>

        {/* Trust strip */}
        <div
          aria-hidden="true"
          className="animate-fade-rise mt-10 flex items-center gap-[13px] text-[11px] leading-[1.5] text-muted [animation-delay:320ms] sm:mt-[58px]"
        >
          <div className="flex">
            <b className="grid h-8 w-8 place-items-center rounded-full border-2 border-ivory bg-charcoal text-[9px] text-white">ब</b>
            <b className="-ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-ivory bg-saffron text-[9px] text-white">जन</b>
            <b className="-ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-ivory bg-saffron text-[9px] text-white">साथ</b>
          </div>
          <span>
            जनता के साथ
            <br />
            <strong className="text-xs text-charcoal">मिलकर आगे बढ़ेंगे</strong>
          </span>
        </div>
      </div>

      {/* Right — portrait */}
      <div className="relative min-h-[475px] md:min-h-[560px]">
        {/* Warm circular backdrop */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[45px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#ffc95f] to-[#f47c23] md:top-5 md:h-[455px] md:w-[455px]"
        />

        {/* Portrait image */}
        <div className="absolute inset-0 bottom-[-45px]">
          <Image
            src={candidate.portrait}
            alt={candidate.portraitAlt}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
            className="object-contain object-bottom"
          />
        </div>

        {/* Rotating tagline badge */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-20 grid h-[100px] w-[100px] rotate-[-12deg] place-content-center rounded-full border border-saffron/55 text-center text-[12px] leading-[1.4] text-saffron md:left-[2%] md:top-[110px] md:h-[126px] md:w-[126px]"
        >
          जन सेवा
          <br />
          <strong className="text-[10px] text-charcoal">सबसे बड़ा धर्म</strong>
        </div>

        {/* Candidate name card */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 right-0 bg-white px-[18px] py-3 shadow-[0_5px_20px_rgb(55_38_20_/_10%)] md:right-[7%]"
        >
          <strong className="block text-[16px]">{candidate.name}</strong>
          <span className="mt-1 block text-[10px] text-saffron">सरपंच प्रत्याशी</span>
        </div>
      </div>
    </section>
  );
}
