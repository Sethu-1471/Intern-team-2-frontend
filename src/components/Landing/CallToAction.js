import CTAImage from "./Images/cta1-background.jpg";
const CallToAction = () => {
  return (
    <div id="cta" class="section">
      <div
        class="bg-image bg-parallax overlay"
        style={{ backgroundImage: `url(${CTAImage})` }}
      ></div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="white-text">
              Industry is growing day by day. So being Industry ready is
              important.
            </h2>
            <p class="lead white-text">
              The future depends on what you do today.
            </p>
            <a class="main-button icon-button" href="#">
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
