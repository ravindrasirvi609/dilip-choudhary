export default function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="scroll-mt-[70px] bg-ivory px-[7vw] py-20 text-center sm:scroll-mt-[82px] md:px-[12vw] md:py-[125px]"
    >
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
        नेतृत्व सिर्फ़ एक पद नहीं, बल्कि अपने लोगों के प्रति एक ज़िम्मेदारी है।
        हमारा संकल्प है कि पंचायत के सभी छह गाँवों की आवाज़ सुनी जाए और विकास
        की रोशनी हर कोने तक पहुँचे।
      </p>

      <div
        aria-hidden="true"
        className="mx-auto mt-12 flex max-w-[320px] items-center gap-4"
      >
        <div className="h-px flex-1 bg-border-warm" />
        <span className="text-[11px] font-bold uppercase tracking-[.15em] text-muted">
          आपका विश्वास · हमारा समर्पण
        </span>
        <div className="h-px flex-1 bg-border-warm" />
      </div>
    </section>
  );
}
