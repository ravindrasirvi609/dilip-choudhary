import { candidate, villages } from "@/lib/content";

/** Isolated JSON-LD structured data — easy to audit and update. */
export default function StructuredData() {
  const schema = {
    "@context":  "https://schema.org",
    "@type":     "Person",
    name:        candidate.name,
    jobTitle:    candidate.role,
    description: `${candidate.panchayat} के सरपंच पद के उम्मीदवार`,
    image:       candidate.portrait,
    url:         "/",
    affiliation: {
      "@type":       "GovernmentOrganization",
      name:          candidate.panchayat,
      address: {
        "@type":          "PostalAddress",
        addressRegion:    candidate.state,
        addressCountry:   "IN",
      },
    },
    knowsAbout: [
      "ग्राम विकास",
      "पंचायत सेवा",
      candidate.panchayat,
      ...villages,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
