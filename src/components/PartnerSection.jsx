// components/PartnersSection.js
import Slider from "react-slick";
import ford from "../../public/images/car-brands/ford.png";

export default function PartnersSection() {
  const settings = {
    dots: true,          // Show dots for navigation
    infinite: true,      // Infinite loop
    speed: 500,          // Transition speed
    slidesToShow: 3,     // Number of slides visible at once
    slidesToScroll: 1,   // Number of slides to scroll
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    centerMode: true,    // Enable center mode for smooth transition
    focusOnSelect: true, // Focus on a slide when clicked
    centerPadding: "10px",  // Reduce the space around the center item
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold">Sell your car for the Best Price</h2>
      <h3 className="text-lg font-semibold mt-4">Our Trusted Partners</h3>
      <div className="mt-6">
        {/* Set container width to 80%, apply light blue background */}
        <div className="w-4/5 mx-auto bg-light-blue-500 p-4 rounded-md">
          <Slider {...settings}>
            <div className="flex justify-center items-center bg-transparent">
              <img src="/images/car-brands/ford.png" alt="Ford" className="w-20 h-20 object-contain bg-transparent" />
            </div>
            <div className="flex justify-center items-center bg-transparent">
              <img src="/images/car-brands/honda.png" alt="Honda" className="w-20 h-20 object-contain bg-transparent" />
            </div>
            <div className="flex justify-center items-center bg-transparent">
              <img src="/images/car-brands/toyata.png" alt="Toyota" className="w-20 h-20 object-contain bg-transparent" />
            </div>
            <div className="flex justify-center items-center bg-transparent">
              <img src="/images/car-brands/tata.png" alt="Tata" className="w-20 h-20 object-contain bg-transparent" />
            </div>
            <div className="flex justify-center items-center bg-transparent">
              <img src="/images/car-brands/ford.png" alt="Ford" className="w-20 h-20 object-contain bg-transparent" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
