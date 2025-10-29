import { i } from "framer-motion/client";
import Image from "next/image";
import { AboutSection } from "../components/AboutSection";
import { CoursesSection } from "../components/CoursesSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { InstructorsSection } from "../components/InstructorsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ServicesSection } from "../components/ServicesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CoursesSection />
      <InstructorsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
