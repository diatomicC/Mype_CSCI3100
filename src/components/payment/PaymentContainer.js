import SelectPaymentContainer from "./SelectPaymentContainer";
import AdditionalInfoContainer from "./AdditionalInfoContainer";
import "../../styles/payment/paymentContainer.css";

function PaymentContainer() {
  return (
    <>
      <div className="payment-container">
        <div className="payment-column">
          <SelectPaymentContainer />
        </div>
        <div className="payment-column">
          <AdditionalInfoContainer />
        </div>
      </div>
    </>
  );
}
export default PaymentContainer;
