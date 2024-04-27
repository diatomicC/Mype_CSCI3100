import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { experimentalSetDeliveryMetricsExportedToBigQueryEnabled } from "firebase/messaging/sw";

function PayButton({ props, db }) {
  let [coin, setCoin] = useState(0);
  // let coin = 0;
  const FetchUser = async () => {
    console.log("In fetch");
    const docRef = doc(db, "User", "KNnrR1hpeBv5Mhytx0Df");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      coin = docSnap.data().m_coin;
      setCoin(docSnap.data().m_coin);
    } else {
      console.log("Data not found");
    }
    return "Done";
  };
  const Paid = () => {
    console.log("Run before Fetch");
    FetchUser().then((coin) => {
      console.log(coin);
    });
    console.log("Start paying section");
    console.log(coin);
    if (coin < Number(getAmount())) {
      return false;
    } else {
      console.log("Changing in database m_coin");
      console.log(getAmount());
      updateMcoinInDb(db, "KNnrR1hpeBv5Mhytx0Df", Number(getAmount()));
      return true;
    }
  };
  const updateMcoinInDb = async (db, userID, new_coin) => {
    const docRef = doc(db, "User", userID);
    console.log(new_coin);
    updateDoc(docRef, { m_coin: new_coin });
  };
  const getAmount = () => {
    let total = 0;
    let i = 0;
    do {
      total += props[i].price;
      i++;
    } while (i < props.length);
    return total;
  };
  const ClickEvent = () => {
    console.log("Handling clickevent");
    if (Paid()) {
      setPaid(true);
    } else {
      setPaid(false);
    }
  };
  let [successPaid, setPaid] = useState(false);
  return (
    <>
      {" "}
      <Popup
        trigger={
          <button
            style={{
              backgroundColor: "#040273",
              color: "white",
              margin: "0",
              padding: "10px",
              width: "100%",
            }}
            onMouseUp={ClickEvent}
          >
            Pay ${getAmount()}
          </button>
        }
        modal
        nested
        closeOnDocumentClick={false}
      >
        {() =>
          successPaid ? (
            <>
              <div className="paid-pop-up">Your transaction is completed.</div>
              <Link to="/">Back to home page.</Link>{" "}
            </>
          ) : (
            <>
              <div className="paid-pop-up">Your transaction is failed.</div>
              <Link to="/">Back to home page.</Link>
            </>
          )
        }
      </Popup>
    </>
  );
}

export default PayButton;
