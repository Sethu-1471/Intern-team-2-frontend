import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCoursebyId, EnrollCourse } from "../../api";

function Comp2() {
  const [data, setData] = useState();
  const [courses, setCourses] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getCoursebyId(id).then((res) => {
        if (res.data.status) {
          toast(res.data.message);
          setCourses(res.data.course);
        } else {
          toast(res.data.message);
        }
      });
      setData(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const handleEnroll = () => {
    EnrollCourse(id).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        // history.push(`/mycourse`);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  if (!courses) return "";
  return (
    <div className="container">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <p>
          You're registering for an the {courses.name} course at{" "}
          {courses.registration ? "Free" : "Cost"}
        </p>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-12">
              <label for="firstName" className="form-label">
                Full name
              </label>
              <input
                disabled
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value={data.name}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            {/* <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div> */}

            <div className="col-12">
              <label for="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required
                  value={data.contactNo}
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                disabled
                type="email"
                className="form-control"
                id="email"
                value={data.email}
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            {/* <div className="col-md-5">
              <label for="country" className="form-label">
                Country
              </label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>India</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div> */}

            {/* <div className="col-md-4">
              <label for="state" className="form-label">
                State
              </label>
              <select className="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>Andhra pradhesh</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>TamilNadu </option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div> */}

            <div className="col-12">
              <label for="zip" className="form-label">
                Country
              </label>
              <input
                type="text"
                disabled
                className="form-control"
                id="zip"
                placeholder=""
                required
                value={data.country}
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>

            <hr className="my-4" />

            {/* <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" for="save-info">
                Save this information for next time
              </label>
            </div> */}
          </div>
        </form>
      </div>
      <hr className="my-4" />
      <button
        className="w-100 btn btn-primary btn-lg"
        type="submit"
        onClick={handleEnroll}
      >
        Continue to checkout
      </button>
    </div>
  );
}

export default Comp2;
