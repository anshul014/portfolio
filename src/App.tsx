import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="bg-background min-h-screen overflow-x-hidden">
        <Header />
        <main className="relative">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster richColors position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
