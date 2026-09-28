import { priorities } from "@/lib/content";

export default function Priorities() {
  return (
    <section
      id="priorities"
      aria-labelledby="priorities-heading"
      className="scroll-mt-[70px] bg-sand px-[7vw] py-20 sm:scroll-mt-[82px] md:px-[8vw] md:py-[110px]"
    >
      {/* Section header */}
      <div className="mb-12 block md:mb-[58px] md:flex md:items-end md:justify-between">
        <div>
          <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-saffron">
            हमारी प्राथमिकताएँ
          </p>
          <h2
            id="priorities-heading"
            className="m-0 text-[clamp(30px,8vw,61px)] font-bold leading-[1.05] tracking-[-.055em]"
          >
            काम की बात,
            <br />
            <em className="text-saffron not-italic">साफ़ नीयत के साथ।</em>
          </h2>
        </div>
        <p className="mt-6 max-w-[230px] text-sm leading-[1.7] text-muted md:mr-[5%] md:mt-0">
          विकास की रोशनी पंचायत के हर कोने तक पहुँचे — यही हमारा लक्ष्य है।
        </p>
      </div>

      {/* Priority cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {priorities.map(({ number, title, body }) => (
          <article
            key={number}
            aria-labelledby={`priority-${number}-title`}
            className="group min-h-[270px] border border-border-warm bg-ivory p-[27px] transition-shadow duration-200 hover:shadow-[0_6px_24px_rgb(39_36_31_/_8%)]"
          >
            <span
              aria-hidden="true"
              className="text-xs font-bold text-saffron"
            >
              {number}
            </span>

            <div
              aria-hidden="true"
              className="my-[22px] border-t border-border-warm"
            />

            <h3
              id={`priority-${number}-title`}
              className="mb-3 text-[21px] font-semibold leading-snug"
            >
              {title}
            </h3>

            <p className="text-[13px] leading-[1.7] text-muted">{body}</p>

            <a
              href="#contact"
              className="mt-6 block text-xs text-saffron transition-colors duration-150 hover:text-saffron-dark"
              aria-label={`${title} — अधिक जानें और जुड़ें`}
            >
              जुड़ें{" "}
              <b aria-hidden="true" className="float-right text-[17px]">↗</b>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
