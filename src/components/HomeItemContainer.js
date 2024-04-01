import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";

function HomeItemContainer() {
  return (
    <>
      <div class="content-container">
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
