import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  subsets:  ["devanagari", "latin"],
  weight:   ["400", "600", "700"],
  variable: "--font-mukta",
  display:  "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://dilip-choudhary.vercel.app"
  ),
  title: {
    default:  "दिलीप चौधरी | बाणियावास ग्राम पंचायत",
    template: "%s | दिलीप चौधरी",
  },
  description:
    "दिलीप चौधरी — बाणियावास ग्राम पंचायत के सरपंच पद के उम्मीदवार। आकड़ावास पुरोहितान, बाणियावास, आकड़ावास कलां, निम्बला खेड़ा, पड़ासला खुर्द और पड़ासला कलां के समान विकास का संकल्प।",
  applicationName: "दिलीप चौधरी अभियान",
  keywords: [
    "दिलीप चौधरी",
    "बाणियावास ग्राम पंचायत",
    "सरपंच प्रत्याशी",
    "निम्बला खेड़ा",
    "आकड़ावास पुरोहितान",
    "आकड़ावास कलां",
    "पड़ासला खुर्द",
    "पड़ासला कलां",
    "राजस्थान पंचायत चुनाव",
  ],
  authors:    [{ name: "दिलीप चौधरी" }],
  creator:    "दिलीप चौधरी",
  alternates: { canonical: "/" },
  category:   "politics",
  openGraph: {
    type:     "website",
    locale:   "hi_IN",
    url:      "/",
    siteName: "दिलीप चौधरी | बाणियावास ग्राम पंचायत",
    title:    "दिलीप चौधरी — आपका साथ, हमारा संकल्प",
    description:
      "बाणियावास ग्राम पंचायत को स्वच्छ, सशक्त और समृद्ध बनाने की दिशा में एक नई शुरुआत।",
    images: [
      {
        url:    "/dilip-choudhary-poster.jpeg",
        width:  1083,
        height: 1452,
        alt:    "दिलीप चौधरी, सरपंच पद के उम्मीदवार",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "दिलीप चौधरी — आपका साथ, हमारा संकल्प",
    description: "बाणियावास ग्राम पंचायत के सरपंच पद के उम्मीदवार।",
    images:      ["/dilip-choudhary-poster.jpeg"],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hi" className={`h-full antialiased ${mukta.variable}`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
