import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

import Header from "../components/Header";
import HomeItemContainer from "../components/home/HomeItemContainer";
import MainSearchBar from "../components/home/HomeSearchBar";

function HomePage({ db }) {
  // store the user ID who has logged in, "" mean not yet logged in
  // todo
  // const [currentUser, setCurrentUser] = useState("");
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

  // update display items according to filters
  // keyword: string,
  // selectedTags: string[],
  // priceRange: [lower, upper] (-1 = no limit)
  const updateItemList = (keyword, selectedTags, priceRange) => {
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
          return item.public_ID
            .toLowerCase()
            .includes(keyword.slice(1).toLowerCase());
        });
      }
      // search title
      else {
        items = items.filter((item) => {
          return item.title.toLowerCase().includes(keyword.toLowerCase());
        });
      }
    }
    // handle price range
    items = items.filter((item) => {
      if (priceRange[0] === -1 && priceRange[1] === -1) return true;
      else if (priceRange[0] === -1) return item.price <= priceRange[1];
      else if (priceRange[1] === -1) return priceRange[0] <= item.price;
      else return priceRange[0] <= item.price && item.price <= priceRange[1];
    });
    setItemList(items);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* search area*/}
      <MainSearchBar
        itemCount={itemList.length}
        tagList={tagList}
        updateItemList={updateItemList}
      />

      {/* display items match filtering condition */}
      <HomeItemContainer itemList={itemList} />
    </>
  );
}

export default HomePage;
