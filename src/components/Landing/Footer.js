import Logo from "./Images/logo.png";
const Footer = () => {
  return (
    <footer id="footer" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo">
              <a className="logo" href="#">
                <h1>Co-Curricular Tutor</h1>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="footer-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="bottom-footer" className="row">
          <div className="col-md-4 col-md-push-8">
            <ul className="footer-social">
              <li>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="google-plus">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
