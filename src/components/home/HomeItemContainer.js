import HomeBlockDisplayItem from "./HomeBlockDisplayItem";
import ContainerStyle from "../../styles/homeItemContainer.css";

function HomeItemContainer({ itemList }) {
  return (
    <>
      <div className="display-item-container" style={ContainerStyle}>
        {/* list of display items */}

        {itemList.map((item, index) => {
          return <HomeBlockDisplayItem {...item} key={"displayItem-" + index} />;
        })}
      </div>
    </>
  );
}

export default HomeItemContainer;
