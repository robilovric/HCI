import Link from "next/link";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}