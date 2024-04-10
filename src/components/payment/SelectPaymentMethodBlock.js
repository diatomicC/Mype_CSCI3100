import React from "react";

function SelectPaymentMethodBlock() {
  return (
    <>
      <div className="payment-column-container">
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <div className="payment-method-selection-box">Paypal</div>
            </div>
            <div className="payment-row">
              <div className="payment-method-selection-box">
                <input
                  type="Radio"
                  name="PaymentMethod-checkbox"
                  value="Paypal"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">Pay with your PayPal account</div>
          </div>
        </div>

        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <div className="payment-method-selection-box">KakaoPay</div>
            </div>
            <div className="payment-row">
              <div className="payment-method-selection-box">
                <input
                  type="Radio"
                  name="PaymentMethod-checkbox"
                  value="KakaoPay"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">Pay with your Kakao account</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectPaymentMethodBlock;
