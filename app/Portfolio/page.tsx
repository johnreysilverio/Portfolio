import MobileNavbar from "@/components/sections/MobileNavbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Craft from "@/components/sections/Craft";
import Career from "@/components/sections/Career";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <div>
      <MobileNavbar />

      <main>
        <Hero />
        <About />

        <section
          aria-label="Craft and Career Section"
          className="relative bg-[url('/svg/bg-dark.svg')] bg-cover bg-center min-h-screen flex flex-col justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-0" />

          <div className="relative z-10">
            <Craft />
            <Career />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
