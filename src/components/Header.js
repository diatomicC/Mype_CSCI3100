import "../styles/header.css"

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
        </div>
      </div>
    </>
  );
}

export default Header;
