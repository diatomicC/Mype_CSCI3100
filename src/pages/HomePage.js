function HomePage() {
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
            {/* arrow icon */}
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
