import Slider from "react-slick";

export default function PartnersSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold">Sell your car for the Best Price</h2>
      <h3 className="text-lg font-semibold mt-4">Our Trusted Partners</h3>
      <div className="mt-6">
        {/* Set container width to 80%, apply light blue background */}
        <div className="w-4/5 mx-auto bg-light-blue-500 p-4 rounded-md">
          <Slider {...settings}>
            <div className="flex justify-center items-center p-4">
              <img
                src="/images/car-brands/ford-new1.png"
                alt="Ford"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="/images/car-brands/honda-new1.png"
                alt="Honda"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="/images/car-brands/toyata-new1.png"
                alt="Toyota"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="/images/car-brands/tata-new1.png"
                alt="Tata"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="/images/car-brands/ford-new1.png"
                alt="Ford"
                className="w-32 h-32 object-contain"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
