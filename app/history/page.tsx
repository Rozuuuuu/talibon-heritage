import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HistoryHero } from "@/components/sections/history/HistoryHero";
import { TimelineSection } from "@/components/sections/history/TimelineSection";
import { ArchitectureSection } from "@/components/sections/history/ArchitectureSection";
import { CradleSection } from "@/components/sections/history/CradleSection";
import { ArchiveSection } from "@/components/sections/history/ArchiveSection";

export const metadata: Metadata = {
  title: "History",
  description:
    "Four centuries of faith, coral stone, and communal labor — the chronological annals of the Most Holy Trinity Cathedral of Talibon, from 1521 to the present.",
};

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-72px)] w-full bg-paper pt-[72px]">
        <div className="flex w-full flex-col text-ink selection:bg-ink selection:text-paper">
          <HistoryHero />
          <TimelineSection />
          <ArchitectureSection />
          <CradleSection />
          <ArchiveSection />
        </div>
      </main>
      <Footer />
    </>
  );
}