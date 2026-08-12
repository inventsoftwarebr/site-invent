import { Hero } from "@/components/home/Hero";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { Ecosystem } from "@/components/home/Ecosystem";
import { SapRecognition } from "@/components/home/SapRecognition";
import { Stats } from "@/components/home/Stats";
import { TaxReformBanner } from "@/components/home/TaxReformBanner";
import { Segments } from "@/components/home/Segments";
import { WhyInvent } from "@/components/home/WhyInvent";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <Stats />
      <Ecosystem />
      <TaxReformBanner />
      <SapRecognition />
      <Segments />
      <WhyInvent />
      <FinalCTA />
    </>
  );
}
