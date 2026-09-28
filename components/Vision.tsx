const commitments = [
  {
    number: "एक",
    heading: "सुनना और समझना",
    text:
      "हर गाँव के लोगों की बात ध्यान से सुनना और उनकी ज़रूरतों को समझना सबसे पहला कदम है।",
  },
  {
    number: "दो",
    heading: "मिलकर फ़ैसले लेना",
    text:
      "पंचायत के बड़े फ़ैसले समाज की सलाह और भागीदारी से लिए जाएँगे — क्योंकि यह पंचायत आपकी है।",
  },
  {
    number: "तीन",
    heading: "हर गाँव, समान ध्यान",
    text:
      "विकास सिर्फ़ किसी एक गाँव तक सीमित नहीं रहेगा — सभी छह गाँवों को समान प्राथमिकता मिलेगी।",
  },
] as const;

export default function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="scroll-mt-[70px] bg-ivory sm:scroll-mt-[82px]"
    >
      {/* Top — centered intro */}
      <div className="px-[7vw] py-20 text-center md:px-[12vw] md:py-[100px]">
        <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-saffron">
          हमारा उद्देश्य
        </p>

        <h2
          id="vision-heading"
          className="m-0 text-[clamp(30px,8vw,61px)] font-bold leading-[1.05] tracking-[-.055em]"
        >
          बाणियावास के हर गाँव की
          <br />
          <em className="text-saffron not-italic">तरक्की, हमारी ज़िम्मेदारी।</em>
        </h2>

        <p className="mx-auto mt-7 max-w-[520px] text-[15px] leading-[1.8] text-muted">
          नेतृत्व सिर्फ़ एक पद नहीं, बल्कि अपने लोगों के प्रति एक गहरी
          ज़िम्मेदारी है। आपका विश्वास और हमारा समर्पण मिलकर ही बाणियावास
          ग्राम पंचायत को एक बेहतर और समृद्ध जगह बना सकते हैं।
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-12 flex max-w-[340px] items-center gap-4"
        >
          <div className="h-px flex-1 bg-border-warm" />
          <span className="text-[11px] font-bold uppercase tracking-[.15em] text-muted">
            आपका विश्वास · हमारा समर्पण
          </span>
          <div className="h-px flex-1 bg-border-warm" />
        </div>
      </div>

      {/* Bottom — three commitments */}
      <div className="border-t border-border-warm bg-sand px-[7vw] py-16 md:px-[8vw] md:py-[80px]">
        <p className="mb-8 text-center text-[12px] font-bold uppercase tracking-[.17em] text-muted">
          हमारी तीन प्रतिबद्धताएँ
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {commitments.map(({ number, heading, text }) => (
            <div
              key={number}
              className="flex flex-col gap-3"
            >
              <span
                aria-hidden="true"
                className="text-[11px] font-bold uppercase tracking-[.12em] text-saffron"
              >
                {number}
              </span>
              <div className="h-px w-8 bg-saffron" aria-hidden="true" />
              <h3 className="text-[18px] font-semibold leading-snug text-charcoal">
                {heading}
              </h3>
              <p className="text-[13px] leading-[1.75] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
