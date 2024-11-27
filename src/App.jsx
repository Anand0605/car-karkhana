// App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import PartnersSection from "./components/PartnerSection";
import OurService from "./components/OurService";
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm";
// import InfoSection from "./components/InfoSection";

function App() {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <Navbar />
      <HeroSection />
      {/* <PartnersSection /> */}
      <OurService/>
      {/* <InfoSection/> */}
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
