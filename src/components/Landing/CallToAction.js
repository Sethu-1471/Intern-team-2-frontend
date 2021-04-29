import CTAImage from './Images/cta1-background.jpg'
const CallToAction = () => {
    return (
        <div id="cta" className="section">
			<div className="bg-image bg-parallax overlay" style={{backgroundImage:`url(${CTAImage})` }}></div>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h2 className="white-text">Industry is growing day by day. So being Industry ready is important.</h2>
						<p className="lead white-text">The future depends on what you do today.</p>
						<a className="main-button icon-button" href="#">Get Started!</a>
					</div>
				</div>
			</div>
		</div>
    )
}

export default CallToAction
