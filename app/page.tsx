import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DossierCards } from "@/components/sections/DossierCards";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-72px)] w-full bg-paper pt-[72px]">
        <div className="flex w-full flex-col text-ink selection:bg-ink selection:text-paper">
          <Hero />
          <DossierCards />
          <QuoteSection />
          <StatsSection />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}