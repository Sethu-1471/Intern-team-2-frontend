import Logo from "./Images/logo.png";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();

  return (
    <header id="header" className="transparent-nav">
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand">
            <a className="logo" href="index.html">
              <img src={Logo} alt="logo"></img>
            </a>
          </div>
          <button className="navbar-toggle">
            <span></span>
          </button>
        </div>
        <nav id="nav">
          <ul
            className="main-menu nav navbar-nav navbar-right d-flex"
            onClick={() => history.push("/login")}
          >
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
          <ul
            className="main-menu nav navbar-nav navbar-right d-flex"
            onClick={() => history.push("/register")}
          >
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
