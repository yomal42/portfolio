import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Your Name — Network Security Engineer | Portfolio";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(document.createElement("meta"));
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Portfolio of a Network Security Engineer — about, experience, education, certifications and contact."
    );
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
