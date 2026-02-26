import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </main>
  );
}
