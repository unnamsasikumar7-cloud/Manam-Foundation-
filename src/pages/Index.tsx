import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import ImpactStats from "@/components/ImpactStats";
import MajorEvents from "@/components/MajorEvents";
import OrphanageSupport from "@/components/OrphanageSupport";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <ImpactStats />
      <MajorEvents />
      <OrphanageSupport />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
