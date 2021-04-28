import HomeImage from './Images/home-background.jpg'
const Home = () => {
    return (
        <div id="home" class="hero-area">
			<div class="bg-image bg-parallax overlay" style={{ backgroundImage:`url(${HomeImage})` }}>
            </div>  
			<div class="home-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<h1 class="white-text">Co-Curricular Tutor</h1>
							<p class="lead white-text">"Online learning is rapidly becoming one of the most cost-effective ways to educate the world's rapidly expanding workforce."</p>
							<a class="main-button icon-button" href="login.jsp">Get Started!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Home
