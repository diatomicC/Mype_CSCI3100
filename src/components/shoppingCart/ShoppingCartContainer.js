import { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import "../../styles/shoppingcart.css";
import $, { data } from "jquery";
import { Link } from "react-router-dom";
import { db } from "../../index";

// this is the container of the shopping cart
function ShoppingCartContainer({ currentUserId }) {
  // set the orginal product_list and shopping_cart to empty
  let [product_list, setProduct_list] = useState([]);
  let [shoppingCart, setShoppingCart] = useState([]);

  // retreive data from database into the product_list and shopping_cart
  useEffect(() => {
    product_list = [];
    setProduct_list([...product_list]);
    FetchUser()
      .then((result) => console.log(result))
      .then(FetchProduct);
    console.log(product_list);
    console.log(shoppingCart);
  }, []);

  // function for fetch user product list
  const FetchUser = async () => {
    console.log("Start fetching user");
    console.log(shoppingCart);
    const docRef = doc(db, "User", currentUserId);
    const docSnap = await getDoc(docRef);
    if (docSnap.data().length === 0) {
      // debug message
      console.log("Not user");
    } else {
      // debug message
      console.log("Finished fetching user");
      // return docSnap.data().shopping_cart.split(" ");
      shoppingCart = docSnap.data().shopping_cart.split(" ");
      setShoppingCart(docSnap.data().shopping_cart.split(" "));
      return shoppingCart;
    }
  };

  // fetch product detail of product in shopping cart from product database
  const FetchProduct = async () => {
    console.log("Start fetching product");
    setTimeout(() => {}, 5000);
    console.log("Finish timeout");

    console.log(shoppingCart);
    const q = query(
      collection(db, "Products"),
      where("public_ID", "in", shoppingCart)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      product_list.push(doc.data());
    });
    setProduct_list([...product_list]);
  };

  // return the selected product in the shopping cart
  const GetSelected = () => {
    let selectedList = [];
    let checked = $("input:checked").toArray();
    checked.forEach(function (c) {
      selectedList.push(c.value);
    });
    return selectedList;
  };

  // function when remove from cart button clicked
  // used to remove selected product in the cart
  const RemoveCart = () => {
    let tmp_selected = GetSelected();
    product_list.slice().map(function (item, index) {
      if (tmp_selected.includes(item.public_ID)) {
        product_list.splice(index, 1);
      }
    });

    shoppingCart.slice().map(function (item, index) {
      if (tmp_selected.includes(item)) {
        shoppingCart.splice(index, 1);
      }
    });

    changeCartInDB(shoppingCart.join(" ")).then(
      setProduct_list([...product_list])
    );
  };

  // called when there is any change in DB (e.g. removed cart item)
  // retrieve again the product list
  const changeCartInDB = async (updated_shopping_cart) => {
    const docRef = doc(db, "User", currentUserId);
    console.log(updated_shopping_cart);
    updateDoc(docRef, { shopping_cart: updated_shopping_cart });
    // updateDoc(docRef, { shopping_cart: {updated_shopping_cart} });
  };

  // let [payment, setPayment] = useState([]);
  // called when go to payment button clicked
  // send selected products to the payment page
  const UpdatePayment = () => {
    let tmp_selected = GetSelected();
    product_list.slice().map(function (item, index) {
      if (!tmp_selected.includes(item.public_ID)) {
        product_list.splice(index, 1);
      }
    });

    shoppingCart.slice().map(function (item, index) {
      if (!tmp_selected.includes(item)) {
        shoppingCart.splice(index, 1);
      }
    });
    console.log(product_list);
  };

  return (
    <>
      <div className="cart-column">
        <h2>Select Project</h2>
        <button onClick={RemoveCart} disabled={product_list.length === 0}>
          Delete from cart
        </button>
      </div>
      <div className="cart-column">
        <div className="cart-row-container">
          <div className="cart-row">selected</div>
          <div className="cart-row">author</div>
          <div className="cart-row">title</div>
          <div className="cart-row">description</div>
          <div className="cart-row">price</div>
        </div>
      </div>
      {product_list.length === 0 && <h3>No item in cart</h3>}
      {product_list.map((item, index) => (
        <>
          <div className="cart-column">
            <div className="cart-row-container">
              <div className="cart-row">
                <input
                  type="checkbox"
                  name="selected_checkbox"
                  value={item.public_ID}
                />
              </div>
              <div className="cart-row">{item.author}</div>
              <div className="cart-row">{item.title}</div>
              <div className="cart-row">{item.shortDescription}</div>
              <div className="cart-row">${item.price}</div>
            </div>
          </div>
        </>
      ))}
      <div className="cart-column">
        <Link to="/payment" state={product_list}>
          <button disabled={product_list.length === 0} onClick={UpdatePayment}>
            Go to payment
          </button>
        </Link>
      </div>
    </>
  );
}

export default ShoppingCartContainer;
