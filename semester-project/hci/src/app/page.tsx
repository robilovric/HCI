import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import SubscribeSection from "./_components/SubscribeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServicesSection />
      <SubscribeSection />
    </main>
  );
}
