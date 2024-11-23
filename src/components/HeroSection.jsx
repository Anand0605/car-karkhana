import React, { useState } from 'react';

export default function HeroSection() {
  // State for dropdowns
  const [brand, setBrand] = useState('Maruti Suzuki');
  const [rto, setRto] = useState('Gurgaon');
  const [year, setYear] = useState('2021');
  const [model, setModel] = useState('Swift');
  const [variant, setVariant] = useState('LXI [2021]');
  const [owner, setOwner] = useState('1st owner');
  const [kmDriven, setKmDriven] = useState('10,000 Km');
  const [whenToSell, setWhenToSell] = useState('Immediately');

  return (
    <div style={{ backgroundColor: '#04203c' }} className="text-white px-4 py-10">
      <div className="text-center">
        {/* Hero Text */}
        <h1 className="text-3xl font-bold">
  We Compare Your Car Price From 10+ Sites<br />
  We Do the Searching, You Get the Price
</h1>

        <p className="mt-2 text-lg">All-in-one-click</p>

        {/* Dropdowns Section */}
        <div className="bg-white text-black p-4 mt-6 rounded-lg mx-auto w-full md:w-4/5">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-center text-sm">
            {/* Brand */}
            <div className="flex-1">
              <p className="font-bold">Brand</p>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="Maruti Suzuki">Maruti Suzuki</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Tata">Tata</option>
              </select>
            </div>

            {/* RTO */}
            <div className="flex-1">
              <p className="font-bold">RTO</p>
              <select
                value={rto}
                onChange={(e) => setRto(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="Gurgaon">Gurgaon</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
              </select>
            </div>

            {/* Year */}
            <div className="flex-1">
              <p className="font-bold">Year</p>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>

            {/* Model */}
            <div className="flex-1">
              <p className="font-bold">Model</p>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="Swift">Swift</option>
                <option value="Alto">Alto</option>
                <option value="Baleno">Baleno</option>
              </select>
            </div>

            {/* Variant */}
            <div className="flex-1">
              <p className="font-bold">Variant</p>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="LXI [2021]">LXI [2021]</option>
                <option value="VXI [2021]">VXI [2021]</option>
                <option value="ZXI [2021]">ZXI [2021]</option>
              </select>
            </div>

            {/* Owner */}
            <div className="flex-1">
              <p className="font-bold">Owner</p>
              <select
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="1st owner">1st owner</option>
                <option value="2nd owner">2nd owner</option>
                <option value="3rd owner">3rd owner</option>
              </select>
            </div>

            {/* KM Driven */}
            <div className="flex-1">
              <p className="font-bold">KM Driven</p>
              <select
                value={kmDriven}
                onChange={(e) => setKmDriven(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="10,000 Km">10,000 Km</option>
                <option value="20,000 Km">20,000 Km</option>
                <option value="30,000 Km">30,000 Km</option>
              </select>
            </div>

            {/* When to Sell */}
            <div className="flex-1">
              <p className="font-bold">When to sell</p>
              <select
                value={whenToSell}
                onChange={(e) => setWhenToSell(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="Immediately">Immediately</option>
                <option value="In 1 week">In 1 week</option>
                <option value="In 1 month">In 1 month</option>
              </select>
            </div>

            {/* Continue Button */}
            <div className="flex-1">
              <button
                onClick={() => alert(`Details submitted:\nBrand: ${brand}`)}
                className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg w-full"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
