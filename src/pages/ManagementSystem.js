import React, { useState } from "react";
import "./managementsystem.css";
import ItemDetails from "./ItemDetails";
import SupplierDetails from "./SupplierDetails";

const ManagementSystem = () => {
  const [dataShow, setDataShow] = useState("item");

  const handleDataShowChange = (val) => {
    setDataShow(val);
  };
  return (
    <div className="managementsys">
      <div className="blueHeader">
        <div className="whiteCircle" />
        <div className="pageHeaderInv">Inventory Management System</div>
        <div className="homeEnd">Home</div>
      </div>
      <div className="formFields">
        <div className="checkBoxAdd">
          <input
            type="checkbox"
            id="item"
            checked={dataShow === "item"}
            onChange={() => handleDataShowChange("item")}
          />
          <label className="checkBoxLabel" htmlFor="item">
            Item
          </label>
          <div className="marginLeftgiven" />
          <input
            type="checkbox"
            id="supplier"
            checked={dataShow === "supplier"}
            onChange={() => handleDataShowChange("supplier")}
          />
          <label className="checkBoxLabel" htmlFor="supplier">
            Supplier
          </label>
        </div>
        {dataShow === "item" ? <ItemDetails /> : <SupplierDetails />}
      </div>
    </div>
  );
};

export default ManagementSystem;
