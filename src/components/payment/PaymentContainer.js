import SelectPaymentContainer from "./SelectPaymentContainer";
import AdditionalInfoContainer from "./AdditionalInfoContainer";
import "../../styles/payment/paymentContainer.css";

function PaymentContainer({ props, db }) {
  console.log(props);
  return (
    <>
      <div className="payment-container">
        <div className="payment-column">
          <SelectPaymentContainer props={props} db={db} />
        </div>
        <div className="payment-column">
          <AdditionalInfoContainer props={props} />
        </div>
      </div>
    </>
  );
}
export default PaymentContainer;
