import React, { useState } from "react";

export default function HeroSection() {
  const [openTab, setOpenTab] = useState(null); // Track the open tab
  const [selectedValues, setSelectedValues] = useState({
    Brand: "Brand",
    RTO: "RTO",
    Year: "Year",
    Model: "Model",
    Variant: "Variant",
    Owner: "Owner",
    "KM Driven": "KM Driven",
    "When to Sell": "When to Sell",
  });

  const options = {
    Brand: [
      "Maruti Suzuki",
      "Nissan",
      "Toyota",
      "Lamborghini",
      "Ford",
      "Mercedes",
      "Audi",
      "Kia",
      "Volkswagen",
      "BMW",
      "Renault",
      "Mitsubishi",
    ],
    RTO: ["Gurgaon", "Delhi", "Noida", "Mumbai", "Bangalore"],
    Year: ["2023", "2022", "2021", "2020", "2019"],
    Model: ["Swift", "Alto", "Baleno", "Creta", "i20"],
    Variant: ["LXI", "VXI", "ZXI", "Alpha", "Beta"],
    Owner: ["1st Owner", "2nd Owner", "3rd Owner", "4th Owner"],
    "KM Driven": ["10,000 Km", "20,000 Km", "30,000 Km", "40,000 Km"],
    "When to Sell": ["Immediately", "In 1 Week", "In 1 Month"],
  };

  const toggleTab = (tab) => {
    setOpenTab((prevTab) => (prevTab === tab ? null : tab)); // Toggle tab dropdown
  };

  const handleSelect = (field, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
    setOpenTab(null); // Close the dropdown after selection
  };

  return (
    <div className="flex justify-start items-center flex-col text-white px-4 w-full min-h-[28rem] py-16 bg-bg-primary">

      <div className="flex flex-col w-[85%] justify-start mb-2">
        <p className="text-xl">We Compare your car price from 10+ site</p>
        <p className="text-sm">we will do the searching you will be get price</p>
      </div>
      <div className="w-[85%] relative">
        {/* Tab Section */}
        <div className="w-full text-black  bg-white rounded flex items-center">
          {Object.keys(selectedValues).map((key) => (
            <div className="border border-blue-300 px-2 py-2">
              <span
                key={key}
                onClick={() => toggleTab(key)}
                className={`cursor-pointer px-3 text-nowrap ${openTab === key
                    ? "border-b-4 border-blue-500"
                    : ""
                  } transition-all duration-300`}
              >

                {selectedValues[key]}
              </span>
            </div>
          ))}

          <button className="bg-blue-400  text-white px-2 py-2 ml-5">Continue</button>
        </div>

        {/* Dropdown Section */}
        {openTab && (
          <div className="absolute w-full top-10 bg-white p-4 flex gap-5 flex-wrap border shadow-md">
            {options[openTab].map((option, idx) => (
              <span
                key={idx}
                onClick={() => handleSelect(openTab, option)}
                className="cursor-pointer bg-gray-300 p-2 hover:bg-green-400 rounded"
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}






