// App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnerSection";
import OurService from "./components/OurService";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <OurService/>
      <Footer/>
    </div>
  );
}

export default App;
