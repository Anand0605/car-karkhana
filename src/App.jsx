
import Navbar from "./components/Navbar";
import OurService from "./components/OurService";
import Footer from "./components/Footer"
// import ContactForm from "./components/ContactForm";
// import InfoSection from "./components/InfoSection";
import {CarInfoSelect} from './components/CarInfoSelect'
// import FAQComponent from "./components/Faq/FAQComponent";
// import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <Navbar />
      <CarInfoSelect />
      {/* <PartnersSection /> */}
      <OurService/>
      {/* <InfoSection/> */}
      {/* <ContactForm/> */}
      {/* <ChakraProvider>
      <FAQ />
    </ChakraProvider> */}
      {/* <FAQComponent/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
