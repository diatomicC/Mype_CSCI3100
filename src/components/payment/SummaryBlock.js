import React from "react";

function SummaryBlock({ props }) {
  const getAmmountToPay = () => {
    let total = 0;
    let i = 0;
    do {
      console.log(props[i].price);
      total += props[i].price;
      i++;
    } while (i < props.length);
    return total;
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
