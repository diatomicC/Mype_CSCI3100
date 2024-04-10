import React from "react";
// import { useState } from "react";

function AcceptanceOfTerms() {
  //   const [TermsAndConditions, setTermsAndConditions] = useState(false);
  //   const [PrivacyPolicy, setPrivacyPolicy] = useState(false);
  //   const [UpdatesAndPromotion, setUpdatesAndPromotion] = useState(false);
  return (
    <>
      <h2>Acceptance of terms</h2>
      <div className="payment-column-container">
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="Checkbox"
                name="AcceptanceOfTermsCheckbox"
                value="TermsAndConditions"
                // checked={TermsAndConditions}
              />
              I accept the terms and conditions
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="Checkbox"
                name="AcceptanceOfTermsCheckbox"
                value="PrivacyPolicy"
                // checked={PrivacyPolicy}
              />
              I accept the privacy policy
            </div>
          </div>
        </div>
        <div className="payment-column">
          <div className="payment-row-container">
            <div className="payment-row">
              <input
                type="Checkbox"
                name="AcceptanceOfTermsCheckbox"
                value="UpdatesAndPromotion"
                // checked={UpdatesAndPromotion}
              />
              I want to recieve updates and promotions
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AcceptanceOfTerms;
