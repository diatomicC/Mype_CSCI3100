import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";

import Header from "../components/Header";
import HomeItemContainer from "../components/HomeItemContainer";
import MainSearchBar from "../components/HomeSearchBar";
import SaleScreen from "./SaleScreen";

import "../styles/homepage.css";

function HomePage({ db }) {
  // store the user ID who has logged in, "" mean not yet logged in
  const [currentUser, setCurrentUser] = useState("");
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
        setItemList(items);
        getTags(items);
      });
  }, []);

  // simulated data
  // useEffect(() => {
  //   let items = [
  //     {
  //       id: "id1",
  //       title: "title 1",
  //       author: "author 1",
  //       tags: ["tag1"],
  //       description: "bruh",
  //       liked: 1,
  //       saved: 1,
  //       ordered: 1,
  //       price: 1,
  //     },
  //     {
  //       id: "id2",
  //       title: "title 2",
  //       author: "author 2",
  //       tags: ["tag2"],
  //       description: "blabla",
  //       liked: 10,
  //       saved: 10,
  //       ordered: 10,
  //       price: 10,
  //     },
  //     {
  //       id: "id3",
  //       title: "title 3",
  //       author: "author 3",
  //       tags: ["tag1", "tag2"],
  //       description: "bonk",
  //       liked: 100,
  //       saved: 100,
  //       ordered: 100,
  //       price: 100,
  //     },
  //     {
  //       id: "id4",
  //       title: "title 4",
  //       author: "author 4",
  //       tags: [
  //         "tag1",
  //         "tag2",
  //         "tag3",
  //         "tag4",
  //         "tag5",
  //         "tag6",
  //         "tag7",
  //         "tag8",
  //         "tag9",
  //         "tag10",
  //         "tag11",
  //         "tag12",
  //         "tag13",
  //         "tag14",
  //         "tag15",
  //       ],
  //       description: "ahhhhhhh",
  //       liked: 0,
  //       saved: 0,
  //       ordered: 0,
  //       price: 0,
  //     },
  //   ];
  //   setItemList(items);

  //   getTags(items);
  // }, []);

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

  return (
    <>
      <Router>
        {/* Header */}
        <Header user={currentUser} setCurrentUser={setCurrentUser} />
        {/* search area*/}
        <MainSearchBar itemCount={itemList.length} tagList={tagList} />

        <Routes>
          {/* display items match filtering condition */}
          <Route
            exact
            path="/"
            element={<HomeItemContainer itemList={itemList} />}
          />

          {/* display detailed information of single item */}
          <Route path="/Product/:itemID" element={<SaleScreen db={db} />} />
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;
