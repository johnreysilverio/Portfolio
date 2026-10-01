import MobileNavbar from "@/components/sections/MobileNavbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Craft from "@/components/sections/Craft";
import Career from "@/components/sections/Career";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import type { PortfolioContent } from "@/lib/portfolio-types";
import { getPortfolioContent } from "@/lib/portfolio-data";

export const dynamic = "force-dynamic";

export default async function Portfolio({ content }: { content?: PortfolioContent }) {
  const resolvedContent = content ?? await getPortfolioContent();
  return (
    <div>
      <MobileNavbar />

      <main>
        <Hero />
        <About images={resolvedContent.aboutImages} />

        <section
          aria-label="Craft and Career Section"
          className="relative bg-[url('/svg/bg-dark.svg')] bg-cover bg-center min-h-screen flex flex-col justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-0" />

          <div className="relative z-10">
            <Craft skills={resolvedContent.skills} projects={resolvedContent.projects} />
            <Career
              experience={resolvedContent.experience}
              certificates={resolvedContent.certificates}
            />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
