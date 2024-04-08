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
        tag: ["tag1"],
        description: "bruh",
      },
      {
        title: "title 2",
        author: "author 2",
        tag: ["tag2"],
        description: "blabla",
      },
      {
        title: "title 3",
        author: "author 3",
        tag: ["tag1", "tag2"],
        description: "bonk",
      },
    ];
    setItemList(items);
  }, []);

  return (
    <>
      <div class="display-item-container" style={ContainerStyle}>
        {/* list of display items */}
        {/* todo : grab data here */}
        {itemList.map((item, index) => {
          return <HomeBlockDisplayItem {...item} key={index}/>
        })}
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
      </div>
    </>
  );
}

export default HomeItemContainer;
