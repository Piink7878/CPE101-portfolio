import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import EducationSection from "@/components/education/EducationSection";
import WorksSection from "@/components/works/WorksSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Page() {
  return (
    <main className="bg-[#f4f7fb]">
      <Navbar />
      <Hero />
      <AboutSection />
      <EducationSection />
      <WorksSection />
      <ContactSection />
    </main>
  );
}
