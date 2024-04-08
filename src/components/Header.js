import "../styles/header.css"

function Header({user, setCurrentUser}) {
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
            <span>{user === "" ? "Login / Sign up" : "User Profile"}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
