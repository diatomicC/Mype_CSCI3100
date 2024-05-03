import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// This is the block containing the section NeedHelp in payment page
function NeedHelpBlock() {
  return (
    <>
      <div className="payment-NeedHelpBlock">
        <h2 className="payment-NeedHelp-header">Need help?</h2>
        <div className="payment-NeedHelp-content">
          <p>
            If you have any questions or need help, please contact our support
            team.
          </p>
        </div>
        <div className="payment-NeedHelp-content">
          <Popup
            trigger={
              <button className="needhelp-button">Contact support</button>
            }
            modal
            nested
          >
            {() => (
              <>
                <div className="payment-NeedHelp-popup-content">
                  Coming soon
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    </>
  );
}

export default NeedHelpBlock;
