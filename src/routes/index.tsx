import { createFileRoute } from "@tanstack/react-router";

import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Flavours } from "@/components/landing/Flavours";
import { ProductViews } from "@/components/landing/ProductViews";
import { Benefits } from "@/components/landing/Benefits";
import { Story } from "@/components/landing/Story";
import { Experience } from "@/components/landing/Experience";
import { Social } from "@/components/landing/Social";
import { Footer } from "@/components/landing/Footer";

const title = "Matcha Gotcha — Kem gelato matcha Ichibancha | Vinamilk";
const description =
  "Kem gelato Matcha Gotcha của Vinamilk: matcha vụ Ichibancha đầu tiên tại Nishio, Aichi. Vị trà non, ít ngọt, gelato mịn 90g.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <main className="grain overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Flavours />
      <ProductViews />
      <Benefits />
      <Story />
      <Experience />
      <Social />
      <Footer />
    </main>
  );
}
