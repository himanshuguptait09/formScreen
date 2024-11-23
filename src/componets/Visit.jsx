import React, { useState } from "react";

const VisitDetails = () => {
  const [formValues, setFormValues] = useState({
    billCategory: "",
    corporate: "",
    enrollmentId: "",
    enrollmentName: "",
    approvalNo: "",
    refLetterNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle reset of "Corporate" when "Bill Category" changes
    if (name === "billCategory") {
      setFormValues({
        ...formValues,
        [name]: value,
        corporate: "", // Reset the "Corporate" field to default
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  return (
    <div className=" bg-light rounded m-5 py-* pt-3 pb-4">
      <div className="container mt-4">
        <h5 className="mb-3">Visit Details</h5>
        <div className="row g-3">
          {/* Bill Category */}     
          <div className="col-md-2">
            <label htmlFor="billCategory" className="form-label">
              Bill Category <span className="text-danger">*</span>
            </label>
            <select
              id="billCategory"
              name="billCategory"
              className="form-select"
              value={formValues.billCategory}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Cash">Cash</option>
              <option value="Insurance">Insurance</option>
            </select>
          </div>

          {/* Corporate */}
          <div className="col-md-2">
            <label htmlFor="corporate" className="form-label">
              Corporate <span className="text-danger">*</span>
            </label>
            <select
              id="corporate"
              name="corporate"
              className="form-select"
              value={formValues.corporate}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="RGC PRIVATE">RGC PRIVATE</option>
              <option value="Other Corp">Other Corp</option>
            </select>
          </div>

          {/* Enrollment ID */}
          <div className="col-md-2">
            <label htmlFor="enrollmentId" className="form-label">
              Enrollment Id
            </label>
            <input
              type="text"
              id="enrollmentId"
              name="enrollmentId"
              className="form-control"
              value={formValues.enrollmentId}
              onChange={handleInputChange}
              placeholder="Enrollment Id"
            />
          </div>

          {/* Enrollment Name */}
          <div className="col-md-2">
            <label htmlFor="enrollmentName" className="form-label">
              Enrollment Name
            </label>
            <input
              type="text"
              id="enrollmentName"
              name="enrollmentName"
              className="form-control"
              value={formValues.enrollmentName}
              onChange={handleInputChange}
              placeholder="Enrollment Name"
            />
          </div>

          {/* Approval No */}
          <div className="col-md-2">
            <label htmlFor="approvalNo" className="form-label">
              Approval No.
            </label>
            <input
              type="text"
              id="approvalNo"
              name="approvalNo"
              className="form-control"
              value={formValues.approvalNo}
              onChange={handleInputChange}
              placeholder="Approval No."
            />
          </div>

          {/* Ref Letter No */}
          <div className="col-md-2">
            <label htmlFor="refLetterNo" className="form-label">
              Ref. Letter No.
            </label>
            <input
              type="text"
              id="refLetterNo"
              name="refLetterNo"
              className="form-control"
              value={formValues.refLetterNo}
              onChange={handleInputChange}
              placeholder="Ref. Letter No."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitDetails ;
