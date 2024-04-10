import SummaryBlock from "./SummaryBlock";
import NeedHelpBlock from "./NeedHelpBlock";
import AcceptanceOfTerms from "./AcceptanceOfTermsBlock";

import "../../styles/payment/paymentContainer.css";

function AdditionalInfoContainer() {
  return (
    <>
      <div className="detail-payment-container">
        <div className="detail-payment-row">
          <SummaryBlock />
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
