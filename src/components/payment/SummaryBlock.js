import React from "react";

function SummaryBlock() {
  const getAmmountToPay = () => {
    /* TODO */
    return 200;
  };
  return (
    <>
      <div className="payment-SummaryBlock">
        <h2 className="payment-Summary-header">Summary</h2>
        <div className="payment-column-container">
          <div className="payment-column">
            <div className="payment-row-container">
              <div className="payment-row">Amount to pay:</div>
              <div className="payment-row">${getAmmountToPay()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryBlock;
