import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { carSearchStaticDetails, carSearchDetails, fuelDetails, transmissionDetails, tabInfo } from "./CarInfoSelect.data";
import { getBrandDetails, getModelDetails, getVeriantDetails } from '../../utils/getCardDetails'

export function CarInfoSelect() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(-1);
  const [selectedValues, setSelectedValues] = useState({});
  const [searchText, setSearchText] = useState("");

  useEffect(() =>{
    const lsSelectedValues = JSON.parse(sessionStorage.getItem('selectedValues'))
    console.log(lsSelectedValues)
    if(lsSelectedValues){
      setSelectedValues(lsSelectedValues)
      setSelectedTabIndex(0)
    }
  }, [])

  const handleTabSelect = (tabIndex) => {
    if (selectedTabIndex === -1 && tabIndex === 0) {
      setSelectedTabIndex(tabIndex);
      setSearchText("");
      return
    } else if (selectedTabIndex === -1) {
      alert(`Select ${tabInfo[0]} to move forward!`)
      return
    }
    if (selectedValues[tabInfo[tabIndex]] || selectedValues[tabInfo[tabIndex - 1]]) {
      setSelectedTabIndex(tabIndex);
      setSearchText("");
    } else {
      alert(`Select ${tabInfo[selectedTabIndex]} to move forward!`)
    }
  };

  const handleSelectValues = (tab, value) => {
    if (tab === "Brand") {
      setSelectedValues(prev => ({ ...prev, Model: "", Variant: "" }))
    }
    setSelectedValues((prev) => ({
      ...prev,
      [tab]: value,
    }));
    sessionStorage.setItem('selectedValues', JSON.stringify({
      ...selectedValues,
      [tab]: value,
    }))
    if(!tabInfo.includes(tab)){
      return
    }
    if (selectedTabIndex !== tabInfo.length) {
      setSelectedTabIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedValues).length < tabInfo.length) {
      alert("Please select all values.");
    } else {
      alert("Successfully Submitted!")
      setSelectedValues({});
      sessionStorage.clear('selectedValues')
    }
  };

  const handleModalSubmit = (mobileNumber) => {
    alert(`Mobile number ${mobileNumber} submitted successfully!`);
  };

  const handleBack = () => {
    if (selectedTabIndex !== 0) {
      setSelectedTabIndex((prev) => prev - 1);
    }
  };

  // Todo: Need to work
  const selectedKey = tabInfo[selectedTabIndex];
  let selectedKeyDetails;

  if (selectedKey === "Brand") {
    selectedKeyDetails = getBrandDetails()
  } else if (selectedKey === "Model") {
    selectedKeyDetails = getModelDetails(selectedValues.Brand)
  } else if (selectedKey === "Variant") {
    selectedKeyDetails = getVeriantDetails(selectedValues.Brand, selectedValues.Model)
  } else {
    selectedKeyDetails = carSearchStaticDetails[selectedKey]
  }

  const searchResult = selectedKeyDetails?.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex justify-start items-center flex-col text-white px-4 w-full min-h-[30rem] py-16 bg-bg-primary">
      <div className="flex flex-col w-[85%] justify-start mb-3">
        <p className="text-2xl font-semibold">
          We Compare your car price from 10+ sites
        </p>
        <p className="text-xl font-medium">
          We will do the searching; you will get the price
        </p>
      </div>
      <div className="w-[85%] relative bg-white rounded-lg overflow-hidden">
        {/* Tab Details */}
        <div className="w-full text-black flex flex-wrap items-center border border-blue-500 rounded-lg overflow-hidden">
          {tabInfo?.map((tabName, index) => (
            <div
              key={tabName}
              className={`flex-1 border pt-2 px-2 flex flex-col ${!selectedValues[tabName] && selectedKeyDetails !== tabName
                ? "opacity-50"
                : ""
                }`}
            >
              <button
                onClick={() => handleTabSelect(index)}
                className="cursor-pointer transition-all duration-300 font-semibold flex flex-col gap-1"
              >
                <span className="py-2 text-nowrap">
                  {!selectedValues?.[tabName] ? (
                    tabName
                  ) : (
                    <p className="">{selectedValues[tabName]}</p>
                  )}
                </span>
              </button>
              <span
                className={classNames(
                  "h-1.5 rounded-t-lg transition-all duration-100",
                  {
                    ["bg-blue-700"]: index === selectedTabIndex,
                  }
                )}
              ></span>
            </div>
          ))}
          <button
            className="bg-blue-700 text-white px-2 py-2 mx-3 z-10 rounded-lg"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
        {/* Main Details */}
        {
          selectedTabIndex >= 0 && <div className="w-full p-4 flex flex-col justify-start items-start gap-5 border text-black shadow-md bg-white h-96 overflow-y-auto">
            <button
              className={`${selectedTabIndex !== 0 ? "" : "hidden"}`}
              onClick={handleBack}
            >
              <FaArrowLeftLong />
            </button>
            {
              selectedTabIndex < tabInfo?.length && (
                <>
                  {
                    tabInfo[selectedTabIndex] === "Variant" &&
                    (
                      <div className="w-full flex flex-col gap-4">
                        <div>
                          <h3 className="font-semibold text-xl pl-1">
                            Enter Your Fuel
                          </h3>
                          <div className="grid grid-cols-2 gap-row-4 gap-col-2">
                            {
                              fuelDetails?.map(fuel => (
                                <button key={fuel} onClick={() => handleSelectValues("Fuel", fuel)} className={`cursor-pointer rounded border-2 p-1 m-2 bg-gray-50 ${selectedValues.Fuel === fuel ? "border-2 border-blue-500" : ""}`}>{fuel}</button>
                              ))
                            }
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl pl-1">
                            Enter Your Transmission
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {
                              transmissionDetails?.map(value => (
                                <button key={value} onClick={() => handleSelectValues("Transmission", value)} className={`cursor-pointer rounded border-2 p-1 m-2 bg-gray-50 ${selectedValues.Transmission === value ? "border-2 border-blue-500" : ""}`}>{value}</button>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    )
                  }
                  {/* back Arrow  */}
                  <div className="w-full flex justify-between">
                    {/* selcted your brand */}
                    <h2 className="text-lg">
                      Select your{" "}
                      <span className="font-semibold">
                        {tabInfo[selectedTabIndex]}
                      </span>{" "}
                      of your Car
                    </h2>
                    <div className="relative w-[200px]">
                      <input
                        type="search"
                        placeholder={`Search ${selectedKey}`}
                        className="border rounded-md border-black outline-none  w-full p-2 pr-8 "
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                      <span className="absolute right-2 top-2.5 text-2xl">
                        <CiSearch />
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    {/* All brand */}
                    <h3 className="font-semibold text-xl pl-1">
                      All {carSearchDetails[selectedTabIndex]?.key}
                    </h3>
                    <div className="flex gap-1 flex-wrap">
                      {!!searchResult?.length ? searchResult?.map(({ title, image, brand }, idx) => {
                        return (
                          <button
                            key={idx}
                            onClick={() =>
                              handleSelectValues(
                                carSearchDetails[selectedTabIndex]?.key,
                                title
                              )
                            }
                            className={classNames(
                              "cursor-pointer rounded border-2 p-1 m-2 bg-gray-50",
                              {
                                ["border-blue-500"]:
                                  title ===
                                  selectedValues?.[
                                  carSearchDetails[selectedTabIndex]?.key
                                  ],
                                ["w-11/12"]: !image?.src,
                              }
                            )}
                          >
                            {image?.src && (
                              <img
                                src={image?.src}
                                alt={image?.alt}
                                className="w-24 object-contain h-16 bg-blend-overlay"
                              />
                            )}
                            {title}
                          </button>
                        )
                      }) : <p className="my-5 mx-3 text-black/30 italic font-semibold text-lg">No Searh Result Found in {tabInfo[selectedTabIndex]} for <span className="text-black/70">{searchText}</span></p>
                      }
                    </div>
                  </div>
                </>
              )
            }
            {/* Take user contact details */}
            <div className="w-full flex justify-center items-center p-5">
              {selectedTabIndex === carSearchDetails?.length && (
                <div className="w-3/4 max-w-[550px] flex flex-col gap-4 border rounded-md border-blue-700 py-4 px-8 ">
                  <h2 className="font-semibold">Enter Your Contact Details</h2>
                  <input type="number" placeholder="Enter number" className=" rounded-md px-1 py-1 outline-none border" />
                  <div className="flex justify-end">
                    <button className="px-4 py-2 rounded-md bg-blue-700 text-white font-semibold">Submit</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
