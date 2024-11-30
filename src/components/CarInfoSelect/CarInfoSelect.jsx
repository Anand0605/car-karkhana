import React, { useState } from "react";
import { carOptions } from './CarInfoSelect.data';
import classNames from "classnames";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

export function CarInfoSelect() {
  const [selectedTab, setSelectedTab] = useState("brand");
  const [selectedValues, setSelectedValues] = useState({});
  const [searchText, setSearchText] = useState("");

  const handleTabSelect = (tabName) => {
    if(selectedValues[tabName] || selectedTab !== tabName){
      setSelectedTab(tabName);
      setSearchText("");
    }else{
      alert("Hii")
    }
  };

  const handleSelectValues = (tab, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [tab]: value,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(selectedValues).length !== Object.keys(carOptions).length) {
      alert("Please Select all values...");
      return;
    }
    alert("Submitted successfully!");
  };

  return (
    <div className="flex justify-start items-center flex-col text-white px-4 w-full min-h-[30rem] py-16 bg-bg-primary">
      <div className="flex flex-col w-[85%] justify-start mb-3">
        <p className="text-2xl font-semibold">We Compare your car price from 10+ sites</p>
        <p className="text-xl font-medium">We will do the searching; you will get the price</p>
      </div>
      <div className="w-[85%] relative bg-white rounded-lg overflow-hidden">
        <div className="w-full text-black flex flex-wrap items-center border border-blue-300 rounded-lg overflow-hidden">
          {Object.keys(carOptions)?.map((tabName) => (
            <div
              key={tabName}
              className={`flex-1 border border-blue-300 border-x-5 border-y-0 pt-2 px-2 flex flex-col ${!selectedValues[tabName] && selectedTab !== tabName ? "opacity-50" : ""}`}
            >
              <button
                onClick={() => handleTabSelect(tabName)}
                className={`cursor-pointer text-nowrap text-start transition-all duration-300 font-semibold`}
              >
                {tabName}
              </button>
              <span className="truncate text-xs pb-1">
                {selectedValues?.[tabName] ? selectedValues[tabName] : "Select Value"}
              </span>
              {tabName === selectedTab && (
                <span className="h-1.5 bg-blue-700 rounded-t-lg"></span>
              )}
            </div>
          ))}
          <button className="bg-blue-700 text-white px-2 py-2 mx-3 rounded-lg" onClick={handleSubmit}>
            Continue
          </button>
        </div>
        <div className="w-full p-4 flex justify-start items-start gap-5 flex-wrap border text-black shadow-md bg-white h-96 overflow-y-auto">
          <div className="w-full flex justify-between relative">
            <span><FaArrowLeftLong /> Select your <span className="font-semibold">{selectedTab}</span> of your Car</span>
            <input type="text" placeholder="search Brand" className="border border-black w-1/3 p-2" onChange={(e) => setSearchText(e.target.value)} />
            <span className="absolute right-2 top-2.5 text-2xl"><CiSearch /></span>
          </div>
          <div>
            <span className="font-semibold text-xl pl-1">All Brands</span>
          </div>
          <div>
            {selectedTab
              ? carOptions[selectedTab]?.filter(data => selectedTab === "brand" ? data.title.includes(searchText) : data.includes(searchText))?.map((value, idx) => {
                return selectedTab === "brand" ? (
                  <button
                    key={idx}
                    onClick={() => handleSelectValues(selectedTab, value?.title)}
                    className={classNames(
                      "cursor-pointer rounded border-2",
                      {
                        ["border-blue-400"]: value?.title === selectedValues?.[selectedTab],
                      }
                    )}
                  >
                    <img src={value?.src} alt={value?.alt} className="w-20 object-fit h-16" />
                  </button>
                ) : (
                  <button
                    key={idx}
                    onClick={() => handleSelectValues(selectedTab, value)}
                    className={classNames(
                      "cursor-pointer bg-gray-300 px-3 py-1 rounded border-2",
                      {
                        ["border-blue-400"]: value === selectedValues?.[selectedTab],
                      }
                    )}
                  >
                    {value}
                  </button>
                )
              })
              : <div>No Tab Selected</div>}
          </div>

        </div>
      </div>
    </div>
  );
}
