import { createFileRoute } from "@tanstack/react-router";
import { Nav, MobileBar } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  Statement,
  Transformation,
  Work,
  Capabilities,
  BeThere,
  Process,
  Proof,
  About,
  Enquiry,
  Footer,
} from "@/components/site/Sections";

const TITLE = "Awesome Event | Wedding & Corporate Event Planner in Delhi NCR";
const DESC =
  "Awesome Event plans and executes weddings, corporate events, celebrations, destination events and event productions across Delhi NCR and beyond.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "Organization"],
          name: "Awesome Event",
          description: DESC,
          telephone: "+918447716668",
          address: {
            "@type": "PostalAddress",
            streetAddress: "House No. 121B, Street No. 12, near Radha Kishan Mandir, Sangam Vihar",
            addressLocality: "Delhi",
            postalCode: "110080",
            addressCountry: "IN",
          },
          areaServed: [
            "Delhi NCR",
            "Noida",
            "Gurugram",
            "Faridabad",
            "Jaipur",
            "Chandigarh",
            "Uttarakhand",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "60",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Statement />
      <Transformation />
      <Work />
      <Capabilities />
      <BeThere />
      <Process />
      <Proof />
      <About />
      <Enquiry />
      <Footer />
      <MobileBar />
    </main>
  );
}
