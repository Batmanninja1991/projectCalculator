import React, { useState } from "react";

const ProjectCalculator = () => {
  const [numPages, setNumPages] = useState(1);
  const [designStyle, setDesignStyle] = useState("simple");
  const [responsiveDesign, setResponsiveDesign] = useState(false);
  const [databaseIntegration, setDatabaseIntegration] = useState(false);
  const [ecommerceFunctionality, setEcommerceFunctionality] = useState(false);
  const [quote, setQuote] = useState(null);
  const [quoteYearly, setQuoteYearly] = useState(null);

  const calculateQuote = () => {
    let total = 250;
    total += numPages * 100;
    total +=
      designStyle === "simple" ? 250 : designStyle === "moderate" ? 500 : 1000;
    total += responsiveDesign ? 250 : 0;
    total += databaseIntegration ? 250 : 0;
    total += ecommerceFunctionality ? 500 : 0;
    setQuote(total);
    setQuoteYearly(total / 2);
  };

  return (
    <div className="flex flex-col justify-center ietms-center text-center p-8 bg-slate-400 min-h-screen font-roboto">
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8">
          Don't overpay!
          <br />
          Get your Website for as little as <br />
          <span className="text-4xl text-ElectricRed">$100</span>
        </h1>
        <h1 className="text-2xl font-bold mb-2">Project Quote Calculator</h1>
        <h2 className="w-3/4 mx-auto text-base mb-8">
          Use the sliders below to indicate your needs, then click the “See
          Pricing” button for a free, instant quote.
        </h2>
        <div className="w-3/4 mx-auto grid grid-cols-1 gap-8 text-center">
          <div className="w-3/4 mx-auto mb-6">
            <label className="block text-lg font-medium mb-2">
              Number of Pages
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={numPages}
              onChange={(e) => setNumPages(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-right">{numPages}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">
                Style of Design
              </label>
              <select
                value={designStyle}
                onChange={(e) => setDesignStyle(e.target.value)}
                className="border rounded p-2"
              >
                <option value="simple">Simple</option>
                <option value="moderate">Moderate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">
                Responsive Design
              </label>
              <input
                type="checkbox"
                checked={responsiveDesign}
                onChange={(e) => setResponsiveDesign(e.target.checked)}
                className="mr-2"
              />
              <span>{responsiveDesign ? "Yes" : "No"}</span>
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">
                Database Integration
              </label>
              <input
                type="checkbox"
                checked={databaseIntegration}
                onChange={(e) => setDatabaseIntegration(e.target.checked)}
                className="mr-2"
              />
              <span>{databaseIntegration ? "Yes" : "No"}</span>
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">
                E-commerce Functionality
              </label>
              <input
                type="checkbox"
                checked={ecommerceFunctionality}
                onChange={(e) => setEcommerceFunctionality(e.target.checked)}
                className="mr-2"
              />
              <span>{ecommerceFunctionality ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
        <button
          onClick={calculateQuote}
          className="mt-8 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          See Pricing
        </button>
        {quote !== null && (
          <div>
            <div className="mt-8 p-4 bg-green-100 text-green-800 border border-green-200 rounded-lg">
              Your estimated project cost is: <strong>${quote}</strong>
            </div>
            <div className="p-4 bg-red-100 text-green-800 border border-red-200 rounded-lg">
              Your estimated yearly project cost is:{" "}
              <strong>${quoteYearly}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCalculator;