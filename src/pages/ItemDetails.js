import React from "react";
import "./itemdetails.css";

const ItemDetails = () => {
  return (
    <div className="itemdetails">
      <div className="headerFix">Item Details</div>
      <div className="formFieldsItems">
        <div className="formFieldsItems2">
          <div className="formFieldsItems3">
            <label className="formLabelInput">Item Name</label>
            <input
              type="text"
              className="formInputlabel"
              maxLength={50}
              placeholder="Enter item name"
            />
            <label className="formLabelSideThing">Max 50 characters</label>
          </div>
          <div style={{ marginLeft: 40 }} className="formFieldsItems3">
            <label className="formLabelInput">Quantity</label>
            <input
              type="number"
              className="formInputlabel"
              placeholder="Enter quantity"
            />
            <label className="formLabelSideThing">Numeric value</label>
          </div>
        </div>
        <div className="formFieldsItems2 giveMarginTop">
          <div className="formFieldsItems3">
            <label className="formLabelInput">Unit Price</label>
            <input
              type="number"
              className="formInputlabel"
              placeholder="Enter unit price"
            />
            <label className="formLabelSideThing">Numeric value (USD)</label>
          </div>
          <div style={{ marginLeft: 40 }} className="formFieldsItems3">
            <label className="formLabelInput">Date of Submission</label>
            <input
              type="date"
              className="formInputlabel"
              placeholder="Select date"
            />
            <label className="formLabelSideThing"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
