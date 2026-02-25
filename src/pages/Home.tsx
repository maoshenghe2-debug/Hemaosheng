import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Publications } from "@/components/Publications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Education />
      <Publications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
