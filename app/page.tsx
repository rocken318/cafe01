import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import InfoFooter from "@/components/InfoFooter";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Concept />
      <Menu />
      <Gallery />
      <InfoFooter />
    </main>
  );
}
