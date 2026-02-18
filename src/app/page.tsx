import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ClientsSection } from "./components/ClientsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FadeInOnScroll } from "./components/FadeInOnScroll";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FadeInOnScroll delay={100}>
        <ServicesSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <AboutSection />
      </FadeInOnScroll>
      <FadeInOnScroll delay={100}>
        <ClientsSection />
      </FadeInOnScroll>
      <FadeInOnScroll delay={100}>
        <ContactSection />
      </FadeInOnScroll>
      <Footer />
    </>
  );
}
