"use client";

import { useState, useEffect, useRef } from "react";
import { candidate, navLinks } from "@/lib/content";

export default function Header() {
  const [open, setOpen]         = useState(false);
  const hamburgerRef            = useRef<HTMLButtonElement>(null);
  const firstDrawerLinkRef      = useRef<HTMLAnchorElement>(null);

  /* Close drawer on Escape, return focus to hamburger */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /* Prevent body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Focus first drawer link when opened */
  useEffect(() => {
    if (open) firstDrawerLinkRef.current?.focus();
  }, [open]);

  function close() {
    setOpen(false);
    hamburgerRef.current?.focus();
  }

  return (
    <>
      {/* Skip-to-main link (visible on focus) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        मुख्य सामग्री पर जाएं
      </a>

      <header className="sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-border-light bg-ivory px-4 sm:h-[82px] sm:px-[6vw]">
        {/* Wordmark */}
        <a
          href="#top"
          aria-label="बाणियावास ग्राम पंचायत — होम पेज"
          className="flex min-w-0 items-center gap-2.5"
        >
          <span
            aria-hidden="true"
            className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-saffron text-xl font-bold text-white sm:h-[38px] sm:w-[38px] sm:text-[22px]"
          >
            ब
          </span>
          <span>
            <strong className="block truncate text-[14px] sm:text-[15px]">बाणियावास</strong>
            <small className="mt-0.5 block text-[9px] tracking-[.08em] text-muted sm:text-[10px]">
              ग्राम पंचायत
            </small>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="मुख्य नेविगेशन"
          className="hidden gap-9 text-[13px] text-muted md:flex"
        >
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

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href={candidate.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded border border-border-warm px-[18px] py-3 text-xs transition-colors duration-150 hover:bg-sand sm:inline-flex"
          >
            <span aria-hidden="true" className="text-base text-[#25D366]">◉</span> WhatsApp
          </a>

          {/* Hamburger button */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label={open ? "नेविगेशन बंद करें" : "नेविगेशन खोलें"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-5 bg-charcoal transition-transform duration-200 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-charcoal transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-charcoal transition-transform duration-200 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={close}
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="नेविगेशन मेनू"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col bg-ivory shadow-[-4px_0_24px_rgb(39_36_31_/_12%)] transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button row */}
        <div className="flex h-[70px] items-center justify-end px-4 sm:h-[82px]">
          <button
            type="button"
            aria-label="बंद करें"
            className="flex h-9 w-9 items-center justify-center text-xl text-charcoal"
            onClick={close}
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="मोबाइल नेविगेशन" className="flex flex-col px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              ref={i === 0 ? firstDrawerLinkRef : undefined}
              href={link.href}
              tabIndex={open ? 0 : -1}
              className="border-b border-border-warm py-5 text-[18px] text-charcoal transition-colors duration-150 hover:text-saffron"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA at bottom of drawer */}
        <div className="mt-auto px-6 pb-10 pt-6">
          <a
            href={candidate.whatsapp}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            className="block rounded bg-saffron px-6 py-4 text-center text-sm font-bold text-white transition-colors duration-150 hover:bg-saffron-dark"
            onClick={close}
          >
            WhatsApp पर जुड़ें
          </a>
        </div>
      </div>
    </>
  );
}
