import HomeImage from "./Images/home-background.jpg";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  return (
    <div id="home" className="hero-area">
      <div
        className="bg-image bg-parallax overlay"
        style={{ backgroundImage: `url(${HomeImage})` }}
      ></div>
      <div className="home-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="white-text">Co-Curricular Tutor</h1>
              <p className="lead white-text">
                "Online learning is rapidly becoming one of the most
                cost-effective ways to educate the world's rapidly expanding
                workforce."
              </p>
              <a
                className="main-button icon-button"
                onClick={() => history.push("/register")}
                style={{ cursor: "pointer" }}
              >
                Register!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
