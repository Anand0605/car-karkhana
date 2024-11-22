import React from 'react';
import Image1 from '../../public/images/car-brands/image.png'; // Replace with your actual image path
import Image2 from '../../public/images/car-brands/image.png'; // Replace with a second image
import Image3 from '../../public/images/car-brands/image.png'; // Replace with a third image

const InfoSection = () => {
  // Data for the cards
  const cards = [
    {
      id: 1,
      image: Image1, // Actual image path
      title: "Search Simply",
      description: "Search best price for your car. ALL IN KK.",
    },
    {
      id: 2,
      image: Image2, // Replace with a second actual image
      title: "Compare Confidently",
      description: "Compare car prices between 10 different partners.",
    },
    {
      id: 3,
      image: Image3, // Replace with a third actual image
      title: "Save Big",
      description: "Discover a great deal and get the best price with KK.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg bg-white"
          >
            <img src={card.image} alt={card.title} className="h-32 w-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
