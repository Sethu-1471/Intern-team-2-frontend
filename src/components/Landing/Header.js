import Logo from "./Images/logo.png";
const Header = () => {
  return (
    <header id="header" class="transparent-nav">
      <div class="container">
        <div class="navbar-header">
          <div class="navbar-brand">
            <a class="logo" href="index.html">
              <img src={Logo} alt="logo"></img>
            </a>
          </div>
          <button class="navbar-toggle">
            <span></span>
          </button>
        </div>
        <nav id="nav">
          <ul class="main-menu nav navbar-nav navbar-right">
            <li>
              <a href="#">Login/Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
