import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";
import ContainerStyle from "../styles/homeItemContainer.css";

function HomeItemContainer({ itemList, setSelectedItem }) {
  return (
    <>
      <div class="display-item-container" style={ContainerStyle}>
        {/* list of display items */}
        {itemList.map((item, index) => {
          return <HomeBlockDisplayItem item={item} {...item} key={index} setSelectedItem={setSelectedItem}/>;
        })}
      </div>
    </>
  );
}

export default HomeItemContainer;
