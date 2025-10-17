import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Maintenance from "@/components/Maintenance";
import BikeTour from "@/components/BikeTour";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Models />
        <Maintenance />
        <BikeTour />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
