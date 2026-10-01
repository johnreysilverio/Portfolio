import Portfolio from "./Portfolio/page";
import { getPortfolioContent } from "@/lib/portfolio-data";

export const dynamic = "force-dynamic";

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://johnreysilverio.com/#website",
      url: "https://johnreysilverio.com/",
      name: "John Rey Silverio Portfolio",
      description:
        "The professional portfolio of full-stack developer John Rey Silverio.",
      inLanguage: "en-US",
      publisher: { "@id": "https://johnreysilverio.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://johnreysilverio.com/#profile",
      url: "https://johnreysilverio.com/",
      name: "John Rey Silverio | Full Stack Developer",
      isPartOf: { "@id": "https://johnreysilverio.com/#website" },
      mainEntity: { "@id": "https://johnreysilverio.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://johnreysilverio.com/#person",
      name: "John Rey Silverio",
      url: "https://johnreysilverio.com/",
      image: "https://johnreysilverio.com/png/PortfolioHero.png",
      jobTitle: "Full Stack Developer",
      description:
        "Full-stack developer specializing in responsive, user-friendly web applications.",
      nationality: { "@type": "Country", name: "Philippines" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Holy Cross of Davao College",
      },
      knowsAbout: [
        "Full-stack web development",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "Responsive web design",
      ],
      sameAs: [
        "https://github.com/johnreysilverio",
        "https://www.linkedin.com/in/jrsilverio17/",
        "https://x.com/JReySilverio",
      ],
    },
  ],
};

const Page = async () => {
  const content = await getPortfolioContent();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio content={content} />
    </>
  );
};

export default Page;
