import React from "react";

function Comp3() {
  return (
    <div className="container">
      <div className="col-md-7 col-lg-8">
        <hr className="my-4" />
        <h4 className="mb-3">Payment</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  checked
                  required
                />
                <label className="form-check-label" for="credit">
                  Credit card
                </label>
                <span>
                  <img
                    src="https://www.udemy.com/staticx/udemy/images/v8/card-mastercard.svg"
                    alt="MasterCard"
                    width="50"
                    className="checkout--sc-card-box__image--A5ssB"
                  />
                  <img
                    src="https://www.udemy.com/staticx/udemy/images/v8/card-visa.svg"
                    alt="VISA"
                    width="50"
                    class="checkout--sc-card-box__image--A5ssB"
                  />
                </span>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" for="debit">
                  Debit card
                </label>
                <span>
                  <img
                    src="https://www.udemy.com/staticx/udemy/images/v8/card-rupay.svg"
                    alt="rupay"
                    width="55"
                    className="checkout--sc-card-box__image--A5ssB"
                  />
                </span>
              </div>
              <div className="form-check">
                <input
                  id="upi"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" for="upi">
                  Pay with UPI
                </label>
                <span>
                  <img
                    src="https://www.udemy.com/staticx/udemy/images/v8/hpp-upi.svg"
                    alt="rupay"
                    width="50"
                    className="checkout--sc-card-box__image--A5ssB"
                  />
                </span>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label for="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>

              <div className="col-md-6">
                <label for="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label for="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>

              <div className="col-md-3">
                <label for="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>

            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comp3;
