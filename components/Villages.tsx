import { villages } from "@/lib/content";

export default function Villages() {
  return (
    <section
      id="villages"
      aria-labelledby="villages-heading"
      className="scroll-mt-[70px] grid grid-cols-1 bg-charcoal px-[7vw] py-20 text-white sm:scroll-mt-[82px] md:grid-cols-[39%_61%] md:px-[8vw] md:py-[120px]"
    >
      {/* Left — heading */}
      <div className="self-start md:sticky md:top-[100px]">
        <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.17em] text-gold">
          हमारी पंचायत
        </p>
        <h2
          id="villages-heading"
          className="m-0 text-[clamp(30px,8vw,61px)] font-bold leading-[1.05] tracking-[-.055em]"
        >
          छह गाँव,
          <br />
          <em className="text-gold not-italic">एक परिवार।</em>
        </h2>
        <p className="mt-7 max-w-[280px] text-sm leading-[1.8] text-muted-dark">
          बाणियावास ग्राम पंचायत के सभी गाँवों का समान विकास और सम्मान हमारी
          प्रतिबद्धता है।
        </p>
      </div>

      {/* Right — village list */}
      <div className="pt-10 md:pl-[10%] md:pt-0">
        <ol aria-label="पंचायत के गाँव" className="list-none p-0 m-0">
          {villages.map((village, index) => (
            <li
              key={village}
              className="flex items-center border-b border-charcoal-soft py-5"
            >
              <span
                aria-hidden="true"
                className="w-[55px] shrink-0 text-[11px] text-gold"
              >
                0{index + 1}
              </span>
              <strong className="text-[clamp(19px,2.4vw,29px)] font-normal">
                {village}
              </strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
