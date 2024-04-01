import "../styles/header.css"
import GlobeIcon from "../icons/globe.svg"
import ArrowDownIcon from "../icons/arrowDown.svg"

function Header() {
  return (
    <>
      <div class="header">
        {/* logo */}
        <div class="logo">
          <img class="logo-image" src="" alt="icon" />
          <span class="logo-text">Mype</span>
        </div>
        <div class="header-options">
          {/* login/ signup/ profile */}
          <button class="user-profile">
            <span>User Profile</span>
          </button>
          {/* language option */}
          <button class="lang-setting">
            <span>Language</span>
            {/* globe icon */}
            <img src={GlobeIcon} alt=""/>
            {/* arrow icon */}
            <img src={ArrowDownIcon} alt=""/>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
