import React, { useState } from "react";
import classNames from "classnames";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { carSearchDetails, fuelDetails, transmissionDetails } from "./CarInfoSelect.data"; // Assuming this is your data file

// Modal Component
function Modal({ onClose, onSubmit }) {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Enter Your Mobile Number
        </h2>
        <input
          type="number"
          placeholder="Enter mobile number"
          className="border p-2 w-full mb-4 rounded text-black"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => onSubmit(mobileNumber)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Component
export function CarInfoSelect() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedValues, setSelectedValues] = useState({});
  const [searchText, setSearchText] = useState("");
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleTabSelect = (tabIndex) => {
    if (selectedValues[carSearchDetails[tabIndex]?.key] || selectedValues[carSearchDetails[tabIndex - 1]?.key]) {
      setSelectedTabIndex(tabIndex);
      setSearchText("");
    } else {
      alert(`Select ${carSearchDetails[selectedTabIndex]?.key} to move forward!`)
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
    if (selectedTabIndex !== carSearchDetails.length) {
      setSelectedTabIndex((prev) => prev + 1);
    } else {
      setIsAuthOpen(true);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedValues).length < carSearchDetails.length) {
      alert("Please select all values.");
    } else {
      alert("Successfully Submitted!")
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

  const selectedKeyDetails = carSearchDetails[selectedTabIndex];
  const searchResult = selectedKeyDetails?.details?.filter(({ title }) =>
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
        <div className="w-full text-black flex flex-wrap items-center border border-blue-500 rounded-lg overflow-hidden">
          {carSearchDetails?.map(({ key: tabName }, index) => (
            <div
              key={tabName}
              className={`flex-1 border pt-2 px-2 flex flex-col ${!selectedValues[tabName] && selectedKeyDetails.key !== tabName
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
        <div className="w-full p-4 flex flex-col justify-start items-start gap-5 border text-black shadow-md bg-white h-96 overflow-y-auto">
          <button
            className={`${selectedTabIndex !== 0 ? "" : "hidden"}`}
            onClick={handleBack}
          >
            <FaArrowLeftLong />
          </button>
          {
            selectedTabIndex < carSearchDetails?.length && (
              <>
                {
                  carSearchDetails[selectedTabIndex]?.key === "Variant" &&
                  (
                    <div className="w-full flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold text-xl pl-1">
                          Enter Your Fuel
                        </h3>
                        <div className="grid grid-cols-2 gap-row-4 gap-col-2">
                          {
                            fuelDetails?.map(fuel => (
                              <button key={fuel} onClick={() => {
                                setSelectedValues(prev => ({ ...prev, Fuel: fuel }))
                              }} className={`cursor-pointer rounded border-2 p-1 m-2 bg-gray-50 ${selectedValues.Fuel === fuel ? "border-2 border-blue-500" : ""}`}>{fuel}</button>
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
                              <button key={value} onClick={() => {
                                setSelectedValues(prev => ({ ...prev, Transmission: value }))
                              }} className={`cursor-pointer rounded border-2 p-1 m-2 bg-gray-50 ${selectedValues.Transmission === value ? "border-2 border-blue-500" : ""}`}>{value}</button>
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
                      {carSearchDetails[selectedTabIndex]?.key}
                    </span>{" "}
                    of your Car
                  </h2>
                  <div className="relative w-[200px]">
                    <input
                      type="search"
                      placeholder={`Search ${selectedKeyDetails?.key}`}
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
                  <div className="flex gap-1 justify-center flex-wrap">
                    {searchResult?.map(({ title, image, brand }, idx) => {
                      if (carSearchDetails[selectedTabIndex].key === "Model" && brand !== selectedValues.Brand) return null;
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
                    })
                    }
                  </div>
                </div>
              </>
            )
          }
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
      </div>
    </div>
  );
}
