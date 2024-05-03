import SelectPaymentContainer from "./SelectPaymentContainer";
import AdditionalInfoContainer from "./AdditionalInfoContainer";
import "../../styles/payment/paymentContainer.css";
import { db } from "../../index";

// This is the block containing the section Payment container in payment page
function PaymentContainer({ props }) {
  console.log(props);
  return (
    <>
      <div className="payment-container">
        <div className="payment-column">
          <SelectPaymentContainer props={props} />
        </div>
        <div className="payment-column">
          <AdditionalInfoContainer props={props} />
        </div>
      </div>
    </>
  );
}
export default PaymentContainer;
