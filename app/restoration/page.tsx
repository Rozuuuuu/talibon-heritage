import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RestorationHero } from "@/components/sections/restoration/RestorationHero";
import { StormSection } from "@/components/sections/restoration/StormSection";
import { PhasesSection } from "@/components/sections/restoration/PhasesSection";
import { ComparisonSlider } from "@/components/sections/restoration/ComparisonSlider";
import { SupportSection } from "@/components/sections/restoration/SupportSection";

export const metadata: Metadata = {
  title: "Restoration",
  description:
    "The post-Odette reconstruction of the Most Holy Trinity Cathedral — a three-year, four-phase effort uniting heritage conservators, local masons, and the community of Talibon.",
};

export default function RestorationPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-72px)] w-full bg-paper pt-[72px]">
        <div className="flex w-full flex-col text-ink selection:bg-ink selection:text-paper">
          <RestorationHero />
          <StormSection />
          <PhasesSection />
          <ComparisonSlider />
          <SupportSection />
        </div>
      </main>
      <Footer />
    </>
  );
}