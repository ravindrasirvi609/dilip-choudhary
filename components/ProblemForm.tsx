"use client";

import { useId, useState, type FormEvent } from "react";
import { villages } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "village" | "mobile", string>>;

const MOBILE_REGEX = /^[6-9]\d{9}$/;

export default function ProblemForm() {
  const [name, setName]       = useState("");
  const [village, setVillage] = useState("");
  const [mobile, setMobile]   = useState("");
  const [problem, setProblem] = useState("");
  const [consent, setConsent] = useState(false);

  const [status, setStatus]           = useState<Status>("idle");
  const [errors, setErrors]           = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  const nameId    = useId();
  const villageId = useId();
  const mobileId  = useId();
  const problemId = useId();
  const consentId = useId();

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "कृपया अपना नाम दर्ज करें।";
    if (!village) next.village = "कृपया अपने गाँव का नाम चुनें।";
    if (!MOBILE_REGEX.test(mobile)) {
      next.mobile = "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।";
    }
    return next;
  }

  function resetForm() {
    setName("");
    setVillage("");
    setMobile("");
    setProblem("");
    setConsent(false);
    setErrors({});
    setServerError("");
    setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    setServerError("");

    if (Object.keys(nextErrors).length > 0 || !consent) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/samasya", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, village, mobile, problem }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setServerError(
          data?.error ?? "जानकारी सेव नहीं हो पाई। कृपया दोबारा प्रयास करें।"
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setServerError("इंटरनेट कनेक्शन में समस्या है। कृपया दोबारा प्रयास करें।");
      setStatus("error");
    }
  }

  return (
    <section
      id="samasya"
      aria-labelledby="samasya-heading"
      className="scroll-mt-[70px] bg-ivory px-[7vw] py-20 sm:scroll-mt-[82px] md:px-[8vw] md:py-[120px]"
    >
      <div className="mx-auto max-w-[640px]">
        <p className="mb-[22px] text-center text-[11px] font-bold uppercase tracking-[.17em] text-saffron">
          आपकी समस्या
        </p>
        <h2
          id="samasya-heading"
          className="m-0 text-center text-[clamp(28px,7vw,48px)] font-bold leading-[1.1] tracking-[-.05em] text-charcoal"
        >
          अपनी समस्या
          <br />
          <em className="text-saffron not-italic">दर्ज करें।</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[460px] text-center text-sm leading-[1.8] text-muted">
          यह जानकारी सिर्फ आपकी समस्या पर फॉलो-अप करने के लिए ली जा रही है,
          ताकि हम आपसे सीधे संपर्क कर सकें।
        </p>

        {status === "success" ? (
          <div role="status" className="mt-10 border border-border-warm bg-sand p-8 text-center">
            <p className="text-[17px] font-semibold text-charcoal">
              धन्यवाद! आपकी जानकारी सफलतापूर्वक दर्ज हो गई है।
            </p>
            <p className="mt-2 text-sm leading-[1.7] text-muted">
              हम आपकी समस्या पर फॉलो-अप के लिए आपसे संपर्क करेंगे।
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="mt-6 inline-flex items-center rounded-[3px] border border-border-warm bg-ivory px-[21px] py-3 text-xs font-bold text-charcoal transition-colors duration-150 hover:bg-sand"
            >
              एक और जानकारी दर्ज करें
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5">
            {/* Naam */}
            <div>
              <label htmlFor={nameId} className="mb-2 block text-xs font-bold text-charcoal">
                नाम <span aria-hidden="true" className="text-saffron">*</span>
              </label>
              <input
                id={nameId}
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${nameId}-error` : undefined}
                className="w-full border border-border-warm bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-150 focus:border-saffron"
              />
              {errors.name && (
                <p id={`${nameId}-error`} className="mt-1.5 text-xs text-saffron-dark">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Gaon */}
            <div>
              <label htmlFor={villageId} className="mb-2 block text-xs font-bold text-charcoal">
                गाँव का नाम <span aria-hidden="true" className="text-saffron">*</span>
              </label>
              <select
                id={villageId}
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                aria-required="true"
                aria-invalid={Boolean(errors.village)}
                aria-describedby={errors.village ? `${villageId}-error` : undefined}
                className="w-full border border-border-warm bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-150 focus:border-saffron"
              >
                <option value="">गाँव चुनें</option>
                {villages.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              {errors.village && (
                <p id={`${villageId}-error`} className="mt-1.5 text-xs text-saffron-dark">
                  {errors.village}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor={mobileId} className="mb-2 block text-xs font-bold text-charcoal">
                मोबाइल नंबर <span aria-hidden="true" className="text-saffron">*</span>
              </label>
              <input
                id={mobileId}
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                placeholder="10 अंकों का मोबाइल नंबर"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                aria-required="true"
                aria-invalid={Boolean(errors.mobile)}
                aria-describedby={errors.mobile ? `${mobileId}-error` : undefined}
                className="w-full border border-border-warm bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-150 focus:border-saffron"
              />
              {errors.mobile && (
                <p id={`${mobileId}-error`} className="mt-1.5 text-xs text-saffron-dark">
                  {errors.mobile}
                </p>
              )}
            </div>

            {/* Samasya (optional) */}
            <div>
              <label htmlFor={problemId} className="mb-2 block text-xs font-bold text-charcoal">
                समस्या का नाम या विवरण
              </label>
              <textarea
                id={problemId}
                rows={4}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="w-full resize-none border border-border-warm bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-150 focus:border-saffron"
              />
            </div>

            {/* Sahmati */}
            <label
              htmlFor={consentId}
              className="flex items-start gap-3 pt-2 text-xs leading-[1.7] text-muted"
            >
              <input
                id={consentId}
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                aria-required="true"
                className="mt-0.5 h-4 w-4 shrink-0 accent-saffron"
              />
              <span>
                मैं सहमति देता/देती हूँ कि मेरी यह जानकारी मेरी समस्या पर
                फॉलो-अप के लिए इस्तेमाल की जाए।{" "}
                <span aria-hidden="true" className="text-saffron">*</span>
              </span>
            </label>

            {serverError && (
              <p role="alert" className="text-xs font-semibold text-saffron-dark">
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={!consent || status === "submitting"}
              className="w-full rounded-[3px] bg-saffron px-[21px] py-4 text-sm font-bold text-white transition-colors duration-150 hover:bg-saffron-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting" ? "भेजा जा रहा है…" : "जानकारी भेजें"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
