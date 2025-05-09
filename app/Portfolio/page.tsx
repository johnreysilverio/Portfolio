import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Craft from "@/components/sections/Craft";
import Career from "@/components/sections/Career";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Craft />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}
