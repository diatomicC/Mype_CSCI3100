import { useEffect, useState } from "react";
import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";
import ContainerStyle from "../styles/homeItemContainer.css";

function HomeItemContainer({ collectionRef }) {
  // save all the items' ID searched
  const [itemList, setItemList] = useState([]);

  // grab all products data
  // useEffect(() => {
  //   let items = [];
  //   // get data from firebase collection
  //   getDocs(collectionRef)
  //     .then((snapshot) => {
  //       snapshot.docs.forEach((item) => {
  //         items.push({ ...item.data(), id: item.id });
  //       });
  //     })
  //     .then(() => {
  //       setItemList(items);
  //     });
  // }, [collectionRef]);

  // simulated data
  useEffect(() => {
    let items = [
      {
        title: "title 1",
        author: "author 1",
        tags: ["tag1"],
        description: "bruh",
        liked: 1,
        saved: 1,
      },
      {
        title: "title 2",
        author: "author 2",
        tags: ["tag2"],
        description: "blabla",
        liked: 10,
        saved: 10,
      },
      {
        title: "title 3",
        author: "author 3",
        tags: ["tag1", "tag2"],
        description: "bonk",
        liked: 100,
        saved: 100,
      },
      {
        title: "title 4",
        author: "author 4",
        tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
        description: "ahhhhhhh",
        liked: 0,
        saved: 0,
      },
    ];
    setItemList(items);
  }, []);

  return (
    <>
      <div class="display-item-container" style={ContainerStyle}>
        {/* list of display items */}
        {itemList.map((item, index) => {
          return <HomeBlockDisplayItem {...item} key={index} />;
        })}
      </div>
    </>
  );
}

export default HomeItemContainer;
