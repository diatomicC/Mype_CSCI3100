import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";
import ContainerStyle from "../styles/homeItemContainer.css";

function HomeItemContainer({ itemList}) {
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
