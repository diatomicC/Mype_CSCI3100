import Header from "../components/Header";
import PaymentContainer from "../components/payment/PaymentContainer";
import ShoppingCartContainer from "../components/shoppingCart/ShoppingCartContainer";
import { Link, useLocation } from "react-router-dom";
import { db } from "../index";

function PaymentScreen() {
  // receive passed argument into location
  const location = useLocation();
  const state = location.state;

  // debug message for checking the passed argument
  console.log(state);

  return (
    <>
      <Header />
      {state === null ? (
        <>
          <h3>No item is in the cart</h3>
          <Link to="/shopping-cart">Go to shopping cart</Link>
        </>
      ) : (
        <PaymentContainer props={state} db={db} />
      )}
    </>
  );
}
export default PaymentScreen;
