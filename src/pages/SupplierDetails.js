import React, { useEffect, useState } from "react";
import "./supplierdetails.css";

const SupplierDetails = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();

  const fetchCountries = async () => {
    const url =
      "https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setCountries(json?.data?.countyList);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchStatesList = async () => {
    const url = `https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=${selectedCountry}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setStates(json?.data?.stateList);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCountries();
    if (selectedCountry) {
      fetchStatesList();
    }
  }, [selectedCountry]);

  console.log(selectedCountry);

  return (
    <div className="supdetails">
      <div className="headerFix">Supplier Details</div>
      <div className="formFieldsItems">
        <div className="formFieldsItems2">
          <div className="formFieldsItems3">
            <label className="formLabelInput">Supplier Details</label>
            <input
              type="text"
              className="formInputlabel"
              maxLength={50}
              placeholder="Enter supplier name"
            />
            <label className="formLabelSideThing">Max 50 characters</label>
          </div>
          <div style={{ marginLeft: 40 }} className="formFieldsItems3">
            <label className="formLabelInput">Enter supplier name</label>
            <input
              type="text"
              className="formInputlabel"
              maxLength={50}
              placeholder="Enter Company name"
            />
            <label className="formLabelSideThing">Max 50 characters</label>
          </div>
        </div>
        <div className="formFieldsItems2 giveMarginTop">
          <div className="formFieldsItems3">
            <label className="formLabelInput">Country</label>
            <select
              value={selectedCountry}
              className="formInputlabelSelect"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option className="formInputlabelSelect" value="">
                Select Country
              </option>
              {countries?.map((country) => (
                <option
                  className="formInputlabelSelect"
                  key={country.countryId}
                  value={country.countryId}
                >
                  {country.name}
                </option>
              ))}
            </select>
            <label className="formLabelSideThing">
              Select country from the list
            </label>
          </div>
          <div style={{ marginLeft: 40 }} className="formFieldsItems3">
            <label className="formLabelInput">State</label>
            <select
              value={selectedState}
              className="formInputlabelSelect"
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option className="formInputlabelSelect" value="">
                Select State
              </option>
              {states?.map((state) => (
                <option
                  className="formInputlabelSelect"
                  key={state.stateId}
                  value={state.stateId}
                >
                  {state.name}
                </option>
              ))}
            </select>
            <label className="formLabelSideThing">
              Select state from the list
            </label>
          </div>
        </div>
        <div className="formFieldsItems2 giveMarginTop">
          <div className="formFieldsItems3">
            <label className="formLabelInput">City</label>
            <input
              type="text"
              className="formInputlabel"
              maxLength={50}
              placeholder="Enter city"
            />
            <label className="formLabelSideThing">Max 50 characters</label>
          </div>
          <div style={{ marginLeft: 40 }} className="formFieldsItems3">
            <label className="formLabelInput">Email Address</label>
            <input
              type="email"
              className="formInputlabel"
              maxLength={50}
              placeholder="Enter email address"
            />
            <label className="formLabelSideThing">Valid email format</label>
          </div>
        </div>
        <div className="formFieldsItems4 giveMarginTop">
          <div className="formFieldsItems4">
            <label className="formLabelInput">Email Address</label>
            <input
              type="email"
              className="formInputlabel"
              maxLength={50}
              placeholder="Enter email address"
            />
            <label className="formLabelSideThing">Valid email format</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDetails;
