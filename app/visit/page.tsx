import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VisitHero } from "@/components/sections/visit/VisitHero";
import { PracticalInfoSection } from "@/components/sections/visit/PracticalInfoSection";
import { HowToGetHere } from "@/components/sections/visit/HowToGetHere";
import { NearbySection } from "@/components/sections/visit/NearbySection";
import { BookTourSection } from "@/components/sections/visit/BookTourSection";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Plan your pilgrimage to the Most Holy Trinity Cathedral of Talibon — mass schedules, historical tours, transit routes from Tagbilaran, Tubigon, and Ubay, and nearby heritage sites.",
};

export default function VisitPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-72px)] w-full bg-paper pt-[72px]">
        <div className="flex w-full flex-col text-ink selection:bg-ink selection:text-paper">
          <VisitHero />
          <PracticalInfoSection />
          <HowToGetHere />
          <NearbySection />
          <BookTourSection />
        </div>
      </main>
      <Footer />
    </>
  );
}