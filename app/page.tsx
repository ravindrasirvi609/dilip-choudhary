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
        <span aria-hidden="true">◉</span>
      </a>
    </>
  );
}
