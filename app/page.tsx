import Header              from "@/components/Header";
import Hero                from "@/components/Hero";
import About               from "@/components/About";
import Vision              from "@/components/Vision";
import Priorities          from "@/components/Priorities";
import Villages            from "@/components/Villages";
import CommunityInvitation from "@/components/CommunityInvitation";
import Footer              from "@/components/Footer";
import StructuredData      from "@/components/StructuredData";
import { candidate }        from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />

      <main
        id="main-content"
        className="min-h-screen max-w-full overflow-x-hidden bg-sand text-charcoal"
      >
        <Hero />
        <About />
        <Vision />
        <Priorities />
        <Villages />
        <CommunityInvitation />
      </main>

      <Footer />
      <StructuredData />
      <a
        href={candidate.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp पर संपर्क करें"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.5.18.92.43 1.32.83.4.4.65.82.83 1.32.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.18.5-.43.92-.83 1.32-.4.4-.82.65-1.32.83-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.32-.83 3.7 3.7 0 0 1-.83-1.32c-.16-.42-.36-1.05-.41-2.22C2.31 15.58 2.3 15.2 2.3 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.18-.5.43-.92.83-1.32.4-.4.82-.65 1.32-.83.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.77c-3.15 0-3.5.01-4.75.07-1.15.05-1.63.24-2.01.37-.32.12-.55.26-.79.5-.24.24-.38.47-.5.79-.13.38-.32.86-.37 2.01-.06 1.25-.07 1.6-.07 4.75s.01 3.5.07 4.75c.05 1.15.24 1.63.37 2.01.12.32.26.55.5.79.24.24.47.38.79.5.38.13.86.32 2.01.37 1.25.06 1.6.07 4.75.07s3.5-.01 4.75-.07c1.15-.05 1.63-.24 2.01-.37.32-.12.55-.26.79-.5.24-.24.38-.47.5-.79.13-.38.32-.86.37-2.01.06-1.25.07-1.6.07-4.75s-.01-3.5-.07-4.75c-.05-1.15-.24-1.63-.37-2.01a2.1 2.1 0 0 0-.5-.79 2.1 2.1 0 0 0-.79-.5c-.38-.13-.86-.32-2.01-.37-1.25-.06-1.6-.07-4.75-.07Zm0 3.02A5.05 5.05 0 1 1 12 17.05 5.05 5.05 0 0 1 12 6.95Zm0 8.33A3.28 3.28 0 1 0 12 8.72a3.28 3.28 0 0 0 0 6.56Zm6.42-8.53a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0Z" /></svg>
      </a>
      <div className="fixed right-5 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 rounded-full bg-white/90 p-1.5 shadow-lg backdrop-blur-sm">
        <a href={candidate.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp पर संपर्क करें" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105">
          <span aria-hidden="true" className="text-xl">☎</span>
        </a>
        <a href={candidate.instagram} target="_blank" rel="noreferrer" aria-label="Instagram प्रोफाइल खोलें" className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white transition-transform hover:scale-105">
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
        </a>
      </div>
    </>
  );
}
