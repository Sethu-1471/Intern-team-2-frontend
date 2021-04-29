import CTAImage from "./Images/cta2-background.jpg";
const Contact = () => {
  return (
    <div id="contact-cta" class="section">
      <div
        class="bg-image bg-parallax overlay"
        style={{ backgroundImage: `url(${CTAImage})` }}
      ></div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <h2 class="white-text">Contact Us</h2>
            <p class="lead white-text">
              Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
            </p>
            <a class="main-button icon-button" href="#">
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
