import HomeImage from './Images/home-background.jpg'
const Home = () => {
    return (
        <div id="home" className="hero-area">
			<div className="bg-image bg-parallax overlay" style={{ backgroundImage:`url(${HomeImage})` }}>
            </div>  
			<div className="home-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<h1 className="white-text">Co-Curricular Tutor</h1>
							<p className="lead white-text">"Online learning is rapidly becoming one of the most cost-effective ways to educate the world's rapidly expanding workforce."</p>
							<a className="main-button icon-button" href="login.jsp">Get Started!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Home
