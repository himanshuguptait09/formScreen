import { useState, useEffect } from "react";
import "./otherDetails.css"; // Ensure this CSS file is included

const OtherDetails = () => {
  const [formData, setFormData] = useState({
    isForeigner: false,
    isEWS: false,
    isMLC: false,
    isPrivileged: false,
    isAbsentia: false,
    isCovidRegistration: false,
    registrationType: "",
    referredType: "",
    hospitalName: "",
    ewsDocType: "",
    ewsDocNumber: "",
    broughtBy: "",
    address: "",
    phoneNumber: "",
    mobileNumber: "",
    policeName: "",
    buckleNumber: "",
    policeStationAddress: "",
    mlcNumber: "",
    accidentTime: "",
  });

  const [activeTab, setActiveTab] = useState("guardian"); // Default active tab is 'guardian'

  // Handle checkbox changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // If any of the checkboxes is unchecked, allow clicking EWS/MLC
    if (!checked) {
      if (name === "isEWS" || name === "isMLC") {
        setActiveTab("guardian");
      }
    }
  };

  // Handle tab changes manually
  const handleTabChange = (tab) => {
    if (
      (tab === "ews" && formData.isEWS) ||
      (tab === "mlc" && formData.isMLC) ||
      tab === "guardian" // Allow Guardian tab to be always accessible
    ) {
      setActiveTab(tab);
    }
  };

  return (
    <div className=" bg-light rounded m-5 py-* pt-3 pb-4">
      <div className="container mt-5">
        <h4 className="mb-3">Other Details</h4>

        {/* Checkboxes */}
        <div className="d-flex justify-content-between flex-wrap mb-4 text-success">
          {[
            "isForeigner",
            "isEWS",
            "isMLC",
            "isPrivileged",
            "isAbsentia",
            "isCovidRegistration",
          ].map((field, index) => (
            <div
              className="form-check me-3"
              key={index}
              style={{ flex: "1 1 15%", color: "" }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                id={field}
                name={field}
                checked={formData[field]}
                onChange={handleChange}
                style={{ accentColor: "" }} // Custom checkbox color
              />
              <label
                className="form-check-label"
                htmlFor={field}
                style={{ color: "green", fontWeight: "500" }} // Custom text color
              >
                {field.replace(/([A-Z])/g, " $1")}
              </label>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${activeTab === "guardian" ? "active" : ""}`}
              onClick={() => handleTabChange("guardian")}
            >
              Guardian Details
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${activeTab === "ews" ? "active" : ""}`}
              onClick={() => handleTabChange("ews")}
              disabled={!formData.isEWS} // Disable if EWS is unchecked
            >
              EWS Details
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${activeTab === "mlc" ? "active" : ""}`}
              onClick={() => handleTabChange("mlc")}
              disabled={!formData.isMLC} // Disable if MLC is unchecked
            >
              MLC Details
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Guardian Details Tab */}
          {activeTab === "guardian" && (
            <div className="tab-pane active">
              <div className="row">
                <div className="col-md-2">
                  <label htmlFor="guardianRelation" className="form-label">
                    Relation <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="guardianRelation"
                    name="guardianRelation"
                    value={formData.guardianRelation}
                    onChange={handleChange}
                    required
                    placeholder="Enter Relation"
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="guardianFirstName" className="form-label">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="guardianFirstName"
                    name="guardianFirstName"
                    value={formData.guardianFirstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="guardianMiddleName" className="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="guardianMiddleName"
                    name="guardianMiddleName"
                    value={formData.guardianMiddleName}
                    onChange={handleChange}
                    placeholder="Enter Middle Name"
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="guardianLastName" className="form-label">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="guardianLastName"
                    name="guardianLastName"
                    value={formData.guardianLastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="guardianMobileNo" className="form-label">
                    Preferred Mobile No <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="guardianMobileNo"
                    name="guardianMobileNo"
                    value={formData.guardianMobileNo}
                    onChange={handleChange}
                    required
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="guardianEmail" className="form-label">
                    Preferred Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="guardianEmail"
                    name="guardianEmail"
                    value={formData.guardianEmail}
                    onChange={handleChange}
                    required
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <label htmlFor="policeStationAddress" className="form-label">
                    Guardian Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="policeStationAddress"
                    name="policeStationAddress"
                    value={formData.policeStationAddress}
                    onChange={handleChange}
                    placeholder="  Guardian Details"
                  />
                </div>
              </div>
            </div>
          )}

          {/* EWS Tab */}
          {activeTab === "ews" && (
            <div className="tab-pane active">
              <div className="row align-items-center">
                {/* EWS fields */}
                <div className="col-md-2">
                  <label htmlFor="registrationType" className="form-label">
                    Registration Type <span className="required">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="registrationType"
                    name="registrationType"
                    value={formData.registrationType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Referred">Referred</option>
                    <option value="Direct">Direct</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="referredType" className="form-label">
                    Referred Type <span className="required">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="referredType"
                    name="referredType"
                    value={formData.referredType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Govt Hospital">Govt Hospital</option>
                    <option value="Private Hospital">Private Hospital</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="hospitalName" className="form-label">
                    Hospital Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="hospitalName"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="ewsDocType" className="form-label">
                    EWS Document Type <span className="required">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="ewsDocType"
                    name="ewsDocType"
                    value={formData.ewsDocType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="NFS Ration Card">NFS Ration Card</option>
                    <option value="Income Certificate">
                      Income Certificate
                    </option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="ewsDocNumber" className="form-label">
                    EWS Document No. <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ewsDocNumber"
                    name="ewsDocNumber"
                    value={formData.ewsDocNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* MLC Tab */}
          {activeTab === "mlc" && (
            <div className="tab-pane active">
              <div className="row g-3">
                <div className="col-md-2">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <select
                    className="form-select"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="broughtBy" className="form-label">
                    Brought By
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="broughtBy"
                    name="broughtBy"
                    value={formData.broughtBy}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="policeName" className="form-label">
                    Name of the Police
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="policeName"
                    name="policeName"
                    value={formData.policeName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="buckleNo" className="form-label">
                    Buckle No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="buckleNo"
                    name="buckleNo"
                    value={formData.buckleNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="policeStationAddress" className="form-label">
                    Police Station Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="policeStationAddress"
                    name="policeStationAddress"
                    value={formData.policeStationAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="mlcNumber" className="form-label">
                    MLC No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mlcNumber"
                    name="mlcNumber"
                    value={formData.mlcNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="accidentTime" className="form-label">
                    Accident Time
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="accidentTime"
                    name="accidentTime"
                    value={formData.accidentTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
