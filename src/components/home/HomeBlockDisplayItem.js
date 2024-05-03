import { Link } from "react-router-dom";
import BookmarkIcon from "../../icons/bookmark.svg";
import StarIcon from "../../icons/star.svg";
import "../../styles/homeBlockDisplayItem.css";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../index";

function HomePage({
  id,
  public_ID,
  author_id,
  title,
  author,
  coverImage,
  tags,
  shortDescription,
  stars,
  saved,
}) {
  const url = `/Product/${id}`;

  // save info of current user
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (cred) => {
      setUser(cred);
    });
  }, []);

  const addItemToCart = async () => {
    // Prevent form submission if not logged in
    if (!user) {
      alert("Please log in!");
      return;
    }

    // Prevent user adding own item into shopping cart
    if (user.uid === author_id) {
      alert("Cannot add your own product to your cart!");
      return;
    }

    try {
      // get current user username
      var snapshot = await getDoc(doc(db, "User", user.uid));
      const shopping_cart = snapshot.data().shopping_cart + " " + public_ID;
      updateDoc(doc(db, "User", user.uid), { shopping_cart: shopping_cart });

      alert("Successfully add item to your cart.");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="item">
        {/* item header */}
        <div className="item-header">
          <Link to={url} className="title">
            {title}
          </Link>
          <button
            className="author"
            onClick={() => {
              // todo
              // goto this author's profile
              console.log("go to author profile");
            }}>
            {author}
          </button>
          {/* quick save to shopping cart, no redirect */}
          <button className="save-btn" onClick={() => addItemToCart()}>
            <img src={BookmarkIcon} alt="" />
          </button>
        </div>
        {/* item content */}
        <div className="product-image">
          {/* display "no image" when user didnt upload image */}
          {!coverImage ? <p> no image </p> : <img src={coverImage} alt="" />}
        </div>
        {/* chain all tags of this product to one string, then display */}
        <div className="item-tag">
          {tags.map((tag) => {
            return " #" + tag;
          })}
        </div>
        <div className="short-description">{shortDescription}</div>
        {/* interactives */}
        <div className="item-footer">
          {/* display number of likes, saved */}
          <div className="ranking">
            <div className="item-stars">
              <img src={StarIcon} alt="" /> {stars}
            </div>
            <div className="item-saved">
              <img src={BookmarkIcon} alt="" /> {saved}
            </div>
          </div>
          {/* click to share/ purchase this product */}
          <div className="interactives-btn">
            <button
              className="purchase"
              onClick={() => {
                // todo
                // go to payment
                console.log("go to payment");
              }}>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
