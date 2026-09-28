import Image from "next/image";

export default function Home() {
  return (
    <main className="poster-page">
      <div className="poster-shell">
        <div className="poster-frame">
          <Image src="/dilip-choudhary-poster.jpeg" alt="Dilip Choudhary, Sarpanch candidate for Nimbla Kheda" width={1083} height={1452} priority sizes="(max-width: 680px) 100vw, 640px" />
        </div>
        <p className="poster-caption">दिलीप चौधरी · सरपंच प्रत्याशी · निंबला खेड़ा</p>
      </div>
    </main>
  );
}
