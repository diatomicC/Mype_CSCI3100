import HomeBlockDisplayItem from "./HomeBlockDisplayItem";
import ContainerStyle from "../../styles/homeItemContainer.css";

function HomeItemContainer({ itemList }) {
  return (
    <>
      <div className="display-item-container" style={ContainerStyle}>
        {/* list of display items */}
        {/* display no result text when cant search anything */}
        {itemList.length === 0 ? (
          <p> No search result. </p>
        ) : (
          itemList.map((item, index) => (
            <HomeBlockDisplayItem {...item} key={"displayItem-" + index} />
          ))
        )}
      </div>
    </>
  );
}

export default HomeItemContainer;
