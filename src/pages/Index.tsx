import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import ImpactStats from "@/components/ImpactStats";
import MajorEvents from "@/components/MajorEvents";
import OrphanageSupport from "@/components/OrphanageSupport";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionDivider />
      <UpcomingEvents />
      <SectionDivider flip />
      <ImpactStats />
      <SectionDivider />
      <MajorEvents />
      <OrphanageSupport />
      <SectionDivider flip />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
