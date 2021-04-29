import AboutImage from './Images/about.png'
const About = () => {
    return (
        <div id="about" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="section-header">
							<h2>Welcome to Co-Curricular Tutor</h2>
							<p className="lead">The online site to strengthen your skill set.</p>
						</div>
						<div className="feature">
							<i className="feature-icon fa fa-flask"></i>
							<div className="feature-content">
								<h4>Online Courses </h4>
								<p>Courses specially designed to make you understand in depth of the topic.</p>
							</div>
						</div>
						<div className="feature">
							<i className="feature-icon fa fa-users"></i>
							<div className="feature-content">
								<h4>Expert Teachers</h4>
								<p>Teachers from top universities with a sound knowledge of the subject</p>
							</div>
						</div>
						<div className="feature">
							<i className="feature-icon fa fa-comments"></i>
							<div className="feature-content">
								<h4>Community</h4>
								<p>The group of similar people who share ideas and innovations. </p>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="about-img">
							<img src={AboutImage} alt=""></img>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default About
