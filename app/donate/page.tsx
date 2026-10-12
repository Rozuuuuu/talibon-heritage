import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DonateHero } from "@/components/sections/donate/DonateHero";
import { DonationFlow } from "@/components/sections/donate/DonationFlow";
import { AllocationBreakdown } from "@/components/sections/donate/AllocationBreakdown";
import { DepositoryDetails } from "@/components/sections/donate/DepositoryDetails";
import { CovenantCTA } from "@/components/sections/donate/CovenantCTA";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the perpetual conservation of the Most Holy Trinity Cathedral of Talibon. Designate a stewardship tier, review our financial allocations, and contribute to the Perpetual Cathedral Maintenance Endowment.",
};

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-72px)] w-full bg-paper pt-[72px]">
        <div className="flex w-full flex-col text-ink selection:bg-ink selection:text-paper">
          <DonateHero />
          <DonationFlow />
          <AllocationBreakdown />
          <DepositoryDetails />
          <CovenantCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}