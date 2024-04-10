import React from "react";

function PayButton() {
  const getAmount = () => {
    /* TODO */
    return 200;
  };
  return (
    <>
      <button
        style={{
          backgroundColor: "#040273",
          color: "white",
          margin: "0",
          padding: "10px",
          width: "100%",
        }} /* TODO onClick={} */
      >
        Pay ${getAmount()}
      </button>
    </>
  );
}

export default PayButton;
