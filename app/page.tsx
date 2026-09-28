import Header              from "@/components/Header";
import Hero                from "@/components/Hero";
import Vision              from "@/components/Vision";
import Priorities          from "@/components/Priorities";
import Villages            from "@/components/Villages";
import CommunityInvitation from "@/components/CommunityInvitation";
import Footer              from "@/components/Footer";
import StructuredData      from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen max-w-full overflow-x-hidden bg-sand text-charcoal">
        <Hero />
        <Vision />
        <Priorities />
        <Villages />
        <CommunityInvitation />
      </main>

      <Footer />
      <StructuredData />
    </>
  );
}
