import React from "react";
import SelectPaymentMethodBlock from "./SelectPaymentMethodBlock";
import PaymentDetailBlock from "./PaymentDetailBlock";
import PayButton from "./PayButton";
import "../../styles/payment/paymentContainer.css";

function SelectPaymentContainer() {
  return (
    <>
      <div className="select-payment-container">
        <div style={{ padding: "25px" }}>
          <h2>Select payment method</h2>
          <p>
            Choose the payment method that suits you best. PayPal and KakaoPay
            are available
          </p>
        </div>
        <div className="select-payment-row">
          <SelectPaymentMethodBlock />
        </div>

        <div className="select-payment-row">
          <PaymentDetailBlock />
        </div>

        <div className="select-payment-row" style={{ padding: "0px" }}>
          <PayButton />
        </div>
      </div>
    </>
  );
}
export default SelectPaymentContainer;
