import Karate from "./Images/karate.jpg";
import Dance from "./Images/dance.jpg";
import Guitar from "./Images/guitar.jpg";
import Calligraphy from "./Images/calligraphy.jpg";
const Courses = () => {
  return (
    <div id="courses" className="section">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 style={{ textAlign: `center` }}>Explore Courses</h2>
            <p className="lead">
              We have a variety of couses catering to everybody's interests.
            </p>
          </div>
        </div>
        <div id="courses-wrapper">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="course">
                <a href="#" className="course-img">
                  <img src={Guitar} alt=""></img>
                  <i className="course-link-icon fa fa-link"></i>
                </a>
                <a className="course-title" href="#">
                  Beginner to Guitar
                </a>
                <div className="course-details">
                  <span className="course-category">Musical</span>
                  <span className="course-price course-free">Free</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="course">
                <a href="#" className="course-img">
                  <img src={Karate} alt=""></img>
                  <i className="course-link-icon fa fa-link"></i>
                </a>
                <a className="course-title" href="#">
                  Introduction to Karate{" "}
                </a>
                <div className="course-details">
                  <span className="course-category">Defence</span>
                  <span className="course-price course-premium">Premium</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="course">
                <a href="#" className="course-img">
                  <img src={Calligraphy} alt=""></img>
                  <i className="course-link-icon fa fa-link"></i>
                </a>
                <a className="course-title" href="#">
                  The Ultimate Calligraphy Course | From Beginner To Advanced
                </a>
                <div className="course-details">
                  <span className="course-category">Writing</span>
                  <span className="course-price course-premium">Premium</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="course">
                <a href="#" className="course-img">
                  <img src={Dance} alt=""></img>
                  <i className="course-link-icon fa fa-link"></i>
                </a>
                <a className="course-title" href="#">
                  The Complete Western dance Course
                </a>
                <div className="course-details">
                  <span className="course-category">Dance</span>
                  <span className="course-price course-free">Premium</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="center-btn">
              <a className="main-button icon-button" href="#">
                More Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
