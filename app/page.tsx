import Scene from "@/components/Scene";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection/>
        <PortfolioSection/>
      </main>
    </>
  );
}
