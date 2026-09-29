import Image from "next/image";
import { candidate } from "@/lib/content";

const values = [
  {
    icon: "◆",
    title: "जन सेवा",
    body: "हर निर्णय में आपकी भागीदारी और पारदर्शिता हमारी प्राथमिकता रहेगी।",
  },
  {
    icon: "◆",
    title: "समान विकास",
    body: "पंचायत के सभी छह गाँवों को समान अवसर और समान सम्मान मिले।",
  },
  {
    icon: "◆",
    title: "सामूहिक ज़िम्मेदारी",
    body: "मिलकर काम करने से ही बेहतर कल बनता है — यही हमारा विश्वास है।",
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-[70px] bg-sand px-[7vw] py-20 sm:scroll-mt-[82px] md:py-[110px]"
    >
      <div className="block md:grid md:grid-cols-[55%_45%] md:gap-[8%]">
        {/* Left — text */}
        <div className="self-center">
          <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-saffron">
            उम्मीदवार के बारे में
          </p>

          <h2
            id="about-heading"
            className="m-0 text-[clamp(30px,8vw,55px)] font-bold leading-[1.07] tracking-[-.05em]"
          >
            एक साथी,
            <br />
            <em className="text-saffron not-italic">एक सेवक।</em>
          </h2>

          <p className="mt-7 text-[15px] leading-[1.85] text-muted">
            दिलीप चौधरी बाणियावास ग्राम पंचायत के एक समर्पित निवासी हैं जो यह
            मानते हैं कि असली बदलाव जनता के साथ मिलकर ही संभव है। उनका संकल्प
            है कि पंचायत का हर काम पारदर्शिता, ईमानदारी और पूरे समर्पण से हो।
          </p>

          <p className="mt-4 text-[15px] leading-[1.85] text-muted">
            वे सरपंच का पद शक्ति के लिए नहीं बल्कि सेवा के लिए चाहते हैं —
            ताकि हर घर तक पानी पहुँचे, हर बच्चे को अच्छी शिक्षा मिले और हर
            गाँव की गली साफ़ और सुरक्षित हो।
          </p>

          {/* Campaign message pull-quote */}
          <blockquote className="mt-8 border-l-2 border-saffron pl-5 text-[18px] font-semibold leading-[1.5] text-charcoal">
            &ldquo;{candidate.panchayat} के विकास के लिए हम सब मिलकर एक नई राह
            बनाएंगे।&rdquo;
          </blockquote>

          {/* Values */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {values.map(({ icon, title, body }) => (
              <div key={title} className="border-t-2 border-saffron pt-4">
                <span aria-hidden="true" className="text-xs text-saffron">{icon}</span>
                <h3 className="mt-2 text-[14px] font-bold">{title}</h3>
                <p className="mt-1.5 text-[12px] leading-[1.7] text-muted">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-border-warm pt-8">
            <h3 className="text-[19px] font-semibold">क्यों ज़रूरी है आपका साथ?</h3>
            <p className="mt-3 text-[14px] leading-[1.8] text-muted">
              पंचायत का विकास तभी स्थायी होगा जब हर परिवार अपनी बात रख सके और
              हर गाँव की ज़रूरत योजना का हिस्सा बने। हमारा प्रयास होगा कि
              फैसले कागज़ों तक सीमित न रहें, बल्कि उनका असर हर घर और हर गली में
              दिखाई दे।
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 text-[13px] sm:grid-cols-2">
              {[
                "खुले और जवाबदेह पंचायत कार्य",
                "महिलाओं और युवाओं की सक्रिय भागीदारी",
                "गाँव-गाँव नियमित जन-सुनवाई",
                "सरकारी योजनाओं का सही लाभ",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-charcoal">
                  <span className="text-saffron" aria-hidden="true">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="mt-12 flex items-start justify-center md:mt-0">
          <div className="relative w-full max-w-[340px]">
            {/* Background accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded bg-[linear-gradient(135deg,#ffc95f,#f47c23)] opacity-20"
            />
            <div className="relative overflow-hidden rounded border border-border-warm shadow-[0_8px_32px_rgb(39_36_31_/_10%)]">
              <Image
                src={candidate.portrait}
                alt={candidate.portraitAlt}
                width={680}
                height={900}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 768px) 80vw, 340px"
              />
              {/* Name tag */}
              <div className="absolute bottom-0 left-0 right-0 bg-charcoal/90 px-5 py-4">
                <strong className="block text-[15px] text-white">{candidate.name}</strong>
                <span className="mt-0.5 block text-[11px] text-gold">{candidate.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
