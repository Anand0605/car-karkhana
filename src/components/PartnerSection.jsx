// components/PartnersSection.js
import Slider from "react-slick";

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
            <div className="flex justify-center items-center bg-transparent p-4">
              <img
                src="/images/car-brands/ford-new1.png"
                alt="Ford"
                className="max-w-32 max-h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center bg-transparent p-4">
              <img
                src="/images/car-brands/honda-new1.png"
                alt="Honda"
                className="max-w-32 max-h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center bg-transparent p-4">
              <img
                src="/images/car-brands/toyata-new1.png"
                alt="Toyota"
                className="max-w-24 max-h-24 object-contain"
              />
            </div>
            <div className="flex justify-center items-center bg-transparent p-4">
              <img
                src="/images/car-brands/tata-new1.png"
                alt="Tata"
                className="max-w-20 max-h-20 object-contain"
              />
            </div>
            <div className="flex justify-center items-center bg-transparent p-4">
              <img
                src="/images/car-brands/ford-new1.png"
                alt="Ford"
                className="max-w-32 max-h-32 object-contain"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
