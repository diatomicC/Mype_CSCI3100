import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";
import ContainerStyle from "../styles/homeItemContainer.css";

function HomeItemContainer() {
  return (
    <>
      <div class="content-container" style={ContainerStyle}>
        {/* list of display items */}
        {/* todo : grab data here */}
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
      </div>
    </>
  );
}

export default HomeItemContainer;
