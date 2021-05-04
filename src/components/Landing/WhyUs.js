const WhyUs = () => {
  return (
    <div id="why-us" className="section">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2>Why Co-Curricular Tutor?</h2>
            <p className="lead">
              We bring the three factors of good education together.
            </p>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="feature-icon fa fa-flask"></i>
              <div className="feature-content">
                <h4>Online Courses</h4>
                <p>
                  Courses specially designed to make you understand in depth of
                  the topic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="feature-icon fa fa-users"></i>
              <div className="feature-content">
                <h4>Expert Teachers</h4>
                <p>
                  Teachers from top universities with a sound knowledge of the
                  subject.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="feature-icon fa fa-comments"></i>
              <div className="feature-content">
                <h4>Community</h4>
                <p>
                  The group of similar people who share ideas and innovations.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
