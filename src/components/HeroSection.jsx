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






// const DropdownExample = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedBrand, setSelectedBrand] = useState("Brand");
//   const brands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSelectBrand = (brand) => {
//     setSelectedBrand(brand);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg">
//         {/* Brand Dropdown */}
//         <div className="relative">
//           <div
//             className="border border-gray-400 px-4 py-2 rounded-md cursor-pointer"
//             onClick={toggleDropdown}
//           >
//             {selectedBrand}
//           </div>
//           {isDropdownOpen && (
//             <div className="absolute mt-2 w-[50rem] border border-gray-300 bg-white shadow-lg rounded-md z-10">
//               {brands.map((brand, index) => (
//                 <div
//                   key={index}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSelectBrand(brand)}
//                 >
//                   {brand}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Other Fields */}
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           RTO
//         </div>
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           Year
//         </div>
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           Model
//         </div>
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           Variant
//         </div>
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           Owner
//         </div>
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           KM Driven
//         </div>
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           When to Sell
//         </div>
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-default">
//           Continue
//         </div>
//       </div>
//     </div>
//   );
// ;



// }


// const [openDropdown, setOpenDropdown] = useState(null);

//   const [selectedValues, setSelectedValues] = useState({
//     brand: "Brand",
//     rto: "RTO",
//     year: "Year",
//     model: "Model",
//     variant: "Variant",
//     owner: "Owner",
//     kmDriven: "KM Driven",
//     whenToSell: "When to Sell",
//   });

//   const options = {
//     brand: ["Toyota", "Honda", "Ford", "BMW", "Mercedes"],
//     rto: ["Gurgaon", "Delhi", "Noida", "Mumbai", "Bangalore"],
//     year: ["2023", "2022", "2021", "2020", "2019"],
//     model: ["Swift", "Alto", "Baleno", "Creta", "i20"],
//     variant: ["LXI", "VXI", "ZXI", "Alpha", "Beta"],
//     owner: ["1st Owner", "2nd Owner", "3rd Owner", "4th Owner"],
//     kmDriven: ["10,000 Km", "20,000 Km", "30,000 Km", "40,000 Km"],
//     whenToSell: ["Immediately", "In 1 Week", "In 1 Month"],
//   };

//   const toggleDropdown = (field) => {
//     setOpenDropdown((prevField) => (prevField === field ? null : field));
//   };

//   const handleSelect = (field, value) => {
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       [field]: value,
//     }));
//     setOpenDropdown(null); // Close the dropdown after selecting a value
//   };

//   return (
//     <div className="p-6">
//       <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg">
//         {Object.keys(options).map((field, index) => (
//           <div className="relative" key={index}>
//             {/* Dropdown Trigger */}
//             <div
//               className="border border-gray-400 px-4 py-2 rounded-md cursor-pointer"
//               onClick={() => toggleDropdown(field)}
//             >
//               {selectedValues[field]}
//             </div>
//             {/* Dropdown Menu */}
//             {openDropdown === field && (
//               <div className="absolute mt-2 w-[15rem] border border-gray-300 bg-white shadow-lg rounded-md z-10">
//                 {options[field].map((option, idx) => (
//                   <div
//                     key={idx}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleSelect(field, option)}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//         {/* Continue Button */}
//         <div className="border border-gray-400 px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white">
//           Continue
//         </div>
//       </div>
//     </div>
//   );
// }
