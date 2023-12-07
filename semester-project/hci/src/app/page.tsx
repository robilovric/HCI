import Link from "next/link";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <HeroSection />
    </main>
  );
}