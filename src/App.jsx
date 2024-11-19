// App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnerSection";
import OurService from "./components/OurService";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <OurService/>
    </div>
  );
}

export default App;
