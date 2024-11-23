import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentDetails = () => {
  const [paymentMode, setPaymentMode] = useState(""); // Selected payment mode
  const [formValues, setFormValues] = useState({
    amount: "",
    transactionId: "",
    payerMobile: "",
    paytmDate: "",
    counterNo: "",
    bankName: "",
    branchName: "",
    cardType: "",
    cardHolderName: "",
    cardApprovalCode: "",
    swipeMachine: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [name]: value });
  };
  // Handle payment mode change
  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
    // Reset fields related to the payment mode
    setFormValues({
      ...formValues,
      transactionId: "",
      payerMobile: "",
      paytmDate: "",
      counterNo: "",
      bankName: "",
      branchName: "",
      cardType: "",
      cardHolderName: "",
      cardApprovalCode: "",
      swipeMachine: "",
    });
  };

  // Handle form submission
  const handleRegister = () => {
    console.log("Form Submitted:", formValues);
    alert("Payment Details Submitted Successfully!");
  };

  return (
    <div className="bg-light rounded m-5 py-* pt-3 pb-4 px-0">
      <div className="container mt-4 mx-3 px-0">
        <h5 className="mb-3">Payment Details</h5>
        <div className="row g-3">
          {/* Payment Mode */}
          <div className="col-md-3">
            <label htmlFor="paymentMode" className="form-label">
              Payment Mode <span className="text-danger">*</span>
            </label>
            <select
              id="paymentMode"
              name="paymentMode"
              className="form-select"
              value={paymentMode}
              onChange={handlePaymentModeChange}
            >
              <option value="">Select</option>
              <option value="Cash">Cash</option>
              <option value="E-Wallet">E-Wallet</option>
              <option value="Card">Card</option>
            </select>
          </div>

          {/* Amount */}
          <div className="col-md-3">
            <label htmlFor="amount" className="form-label">
              Amount <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-control"
              placeholder="Enter amount"
              value={formValues.amount}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Conditional Fields */}
        {paymentMode === "E-Wallet" && (
          <div className="row g-3 mt-3">
            {/* Transaction ID */}
            <div className="col-md-3">
              <label htmlFor="transactionId" className="form-label">
                Transaction ID <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                className="form-control"
                placeholder="Transaction ID"
                value={formValues.transactionId}
                onChange={handleInputChange}
              />
            </div>

            {/* Payer Mobile No */}
            <div className="col-md-3">
              <label htmlFor="payerMobile" className="form-label">
                Payer Mobile No. <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="payerMobile"
                name="payerMobile"
                className="form-control"
                placeholder="Payer Mobile No."
                value={formValues.payerMobile}
                onChange={handleInputChange}
              />
            </div>

            {/* Paytm Date */}
            <div className="col-md-3">
              <label htmlFor="paytmDate" className="form-label">
                Paytm Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                id="paytmDate"
                name="paytmDate"
                className="form-control"
                value={formValues.paytmDate}
                onChange={handleInputChange}
              />
            </div>

            {/* Counter No */}
            <div className="col-md-3">
              <label htmlFor="counterNo" className="form-label">
                Counter No. <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="counterNo"
                name="counterNo"
                className="form-control"
                placeholder="Counter No."
                value={formValues.counterNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {paymentMode === "Card" && (
          <div className="row g-3 mt-3">
            {/* Bank Name */}
            <div className="col-md-2">
              <label htmlFor="bankName" className="form-label">
                Bank Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="form-control"
                placeholder="Bank Name"
                value={formValues.bankName}
                onChange={handleInputChange}
              />
            </div>

            {/* Branch Name */}
            <div className="col-md-2">
              <label htmlFor="branchName" className="form-label">
                Branch Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="branchName"
                name="branchName"
                className="form-control"
                placeholder="Branch Name"
                value={formValues.branchName}
                onChange={handleInputChange}
              />
            </div>

            {/* Card Type */}
            <div className="col-md-2">
              <label htmlFor="cardType" className="form-label">
                Card Type <span className="text-danger">*</span>
              </label>
              <select
                id="cardType"
                name="cardType"
                className="form-select"
                value={formValues.cardType}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
            </div>

            {/* Card Holder Name */}
            <div className="col-md-2">
              <label htmlFor="cardHolderName" className="form-label">
                Card Holder Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                className="form-control"
                placeholder="Card Holder Name"
                value={formValues.cardHolderName}
                onChange={handleInputChange}
              />
            </div>

            {/* Card Approval Code */}
            <div className="col-md-2 mt-3">
              <label htmlFor="cardApprovalCode" className="form-label">
                Card Approval Code <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="cardApprovalCode"
                name="cardApprovalCode"
                className="form-control"
                placeholder="Approval Code"
                value={formValues.cardApprovalCode}
                onChange={handleInputChange}
              />
            </div>

            {/* Swipe Machine */}
            <div className="col-md-2 mt-3">
              <label htmlFor="swipeMachine" className="form-label">
                Swipe Machine <span className="text-danger">*</span>
              </label>
              <select
                id="swipeMachine"
                name="swipeMachine"
                className="form-select"
                value={formValues.swipeMachine}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Machine1">Machine1</option>
                <option value="Machine2">Machine2</option>
              </select>
            </div>
          </div>
        )}

        {/* Register Button */}
        <div className="mt-4">
          <button className="btn btn-success" onClick={handleRegister}>
            Register/Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
