import React from "react";

function PaymentDetailBlock({ props }) {
  const getAmount = () => {
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
      <h2>Payment details</h2>
      <div className="payment-column-container">
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <span>Amount</span>
            </div>
            <div className="payment-row">
              <span>M-Coin: {getAmount()}</span>
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <label for="card number">
                <span>Card number</span>
                <strong>
                  <span aria-label="required">*</span>
                </strong>
              </label>
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="tel"
                id="number"
                name="cardnumber"
                required
                placeholder="0000 0000 0000 0000"
                className="payment-input-box"
              />
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <label for="expiration">
                <span>Expiration</span>
                <strong>
                  <span aria-label="required">*</span>
                </strong>
              </label>
            </div>
            <div className="payment-row">
              <label for="CVV">
                <span>CVV</span>
                <strong>
                  <span aria-label="required">*</span>
                </strong>
              </label>
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="text"
                id="expiration"
                name="expiration"
                required
                placeholder="MM/YY"
                pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
                className="payment-input-box"
              />
            </div>
            <div className="payment-row">
              <input
                type="text"
                id="cvv"
                name="cvv"
                required
                placeholder="000"
                className="payment-input-box"
              />
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <label for="address">
                <span>Billing address</span>
                <strong>
                  <span aria-label="required">*</span>
                </strong>
              </label>
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="text"
                id="streetnumber"
                name="streetnumber"
                required
                placeholder="Street number"
                className="payment-input-box"
              />
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="text"
                id="postalcode"
                name="postalcode"
                required
                placeholder="Postal code"
                className="payment-input-box"
              />
            </div>
            <div className="payment-row">
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="City"
                className="payment-input-box"
              />
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="text"
                id="country"
                name="country"
                required
                placeholder="Country"
                className="payment-input-box"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentDetailBlock;
