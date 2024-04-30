import SummaryBlock from "./SummaryBlock";
import NeedHelpBlock from "./NeedHelpBlock";
import AcceptanceOfTerms from "./AcceptanceOfTermsBlock";

import "../../styles/payment/paymentContainer.css";

// This is the block containing the section AddtionalInfo in payment page
function AdditionalInfoContainer({ props }) {
  console.log(props);
  return (
    <>
      <div className="detail-payment-container">
        <div className="detail-payment-row">
          <SummaryBlock props={props} />
        </div>
        <div className="detail-payment-row">
          <NeedHelpBlock />
        </div>

        <div className="detail-payment-row">
          <AcceptanceOfTerms />
        </div>
      </div>
    </>
  );
}
export default AdditionalInfoContainer;
