import Scene from "@/components/Scene";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import PortfolioSection from "@/components/PortfolioSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection/>
        <PortfolioSection/>
        <FaqSection/>
      </main>
    </>
  );
}
