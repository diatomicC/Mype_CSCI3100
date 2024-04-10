import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";

import Header from "../components/Header";
import HomeItemContainer from "../components/HomeItemContainer";
import MainSearchBar from "../components/HomeSearchBar";
import SaleScreen from "./SaleScreen";
import ProductUploadPage from "./ProductUploadPage";

function HomePage({ db }) {
  // store the user ID who has logged in, "" mean not yet logged in
  const [currentUser, setCurrentUser] = useState("");
  // database items
  const [database, setDatabase] = useState([]);
  // save all the items' ID searched
  const [itemList, setItemList] = useState([]);
  // tagList, set in item container after retreiving data from database
  const [tagList, setTagList] = useState([]);

  // grab all products data
  useEffect(() => {
    let items = [];
    // get data from firebase collection
    getDocs(collection(db, "Products"))
      .then((snapshot) => {
        snapshot.docs.forEach((item) => {
          items.push({ ...item.data(), id: item.id });
        });
      })
      .then(() => {
        setDatabase(items);
        setItemList(items);
        getTags(items);
      });
  }, []);

  // return all the tags exist in the item list, sort by ascending order
  const getTags = (items) => {
    let tagList = [
      ...new Set(
        items
          .map((item) => item.tags)
          .flat()
          .filter(Boolean)
      ),
    ].sort();
    setTagList(tagList);
  };

  // update display items according to filters(, sort?)
  const updateItemList = (keyword, selectedTags) => {
    let items = [...database];
    // handle selectedTags
    if (selectedTags.length !== 0) {
      items = [];
      database.forEach((item) => {
        item.tags.forEach((tag) => {
          if (selectedTags.includes(tag) && !items.includes(item))
            items.push(item);
        });
      });
    }
    // handle search keyword
    if (keyword.length !== 0) {
      // search id
      if (keyword[0] === "@") {
        items = items.filter((item) => {
          return item.public_ID.toLowerCase().includes(keyword.slice(1).toLowerCase());
        });
      }
      // search title
      else {
        items = items.filter((item) => {
          return item.title.toLowerCase().includes(keyword.toLowerCase());
        });
      }
    }
    setItemList(items);
  };

  return (
    <>
      <Router>
        {/* Header */}
        <Header user={currentUser} setCurrentUser={setCurrentUser} />
        {/* search area*/}
        <MainSearchBar
          itemCount={itemList.length}
          tagList={tagList}
          updateItemList={updateItemList}
        />

        <Routes>
          {/* display items match filtering condition */}
          <Route
            exact
            path="/"
            element={<HomeItemContainer itemList={itemList} />}
          />

          {/* display detailed information of single item */}
          <Route path="/Product/:itemID" element={<SaleScreen db={db} />} />
          <Route path="/ProductUpload" element={<ProductUploadPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;
