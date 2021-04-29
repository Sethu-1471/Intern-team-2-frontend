import CTAImage from './Images/cta2-background.jpg'
const Contact = () => {
    return (
        <div id="contact-cta" className="section">
			<div className="bg-image bg-parallax overlay" style={{ backgroundImage:`url(${CTAImage})` }}></div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center">
						<h2 className="white-text">Contact Us</h2>
						<p className="lead white-text">Feel free to conatct us anytime to know more.</p>
						<a className="main-button icon-button" href="#">Contact Us Now</a>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Contact
