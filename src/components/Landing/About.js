import AboutImage from "./Images/about.png";
const About = () => {
  return (
    <div id="about" class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="section-header">
              <h2>Welcome to Co-Curricular Tutor</h2>
              <p class="lead">The online site to strengthen your skill set.</p>
            </div>
            <div class="feature">
              <i class="feature-icon fa fa-flask"></i>
              <div class="feature-content">
                <h4>Online Courses </h4>
                <p>
                  Courses specially designed to make you understand in depth of
                  the topic.
                </p>
              </div>
            </div>
            <div class="feature">
              <i class="feature-icon fa fa-users"></i>
              <div class="feature-content">
                <h4>Expert Teachers</h4>
                <p>
                  Teachers from top universities with a sound knowledge of the
                  subject
                </p>
              </div>
            </div>
            <div class="feature">
              <i class="feature-icon fa fa-comments"></i>
              <div class="feature-content">
                <h4>Community</h4>
                <p>
                  The group of similar people who share ideas and innovations.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-img">
              <img src={AboutImage} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
