import Navbar from "./components/Navbar";
import OurService from "./components/OurService";
import Footer from "./components/Footer";
import { CarInfoSelect } from './components/CarInfoSelect';
import { FAQComponent } from './components/Faq/FAQComponent';


function App() {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <Navbar />
      <CarInfoSelect />
      <OurService />
      <FAQComponent />
      <Footer />
    </div>
  );
}

export default App;
