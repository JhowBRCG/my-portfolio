import Hero from "@/components/Sections/Hero";
import Skills from "@/components/Sections/Skills";
import About from "@/components/Sections/About";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Layout/Footer";

export default function page() {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
