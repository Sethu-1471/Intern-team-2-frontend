import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../Assets/favicon.png";
import { login } from "../../api/index";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const onSave = () => {
    if (name && password) {
      let payload = {
        username: name,
        password,
      };
      login(payload).then((res) => {
        if (res.data.status) {
          toast(res.data.message);
          if (res.data.user.isAdmin) {
            localStorage.setItem("isAdmin", res.data.user.isAdmin);
          } else {
            localStorage.removeItem("isAdmin");
          }
          localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          history.push("/courselist");
        } else {
          toast.error(res.data.message);
        }
      });
    } else {
      toast.error("Some Field are unfilled");
    }
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div className="row flex-grow">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="auth-form-transparent text-left p-3">
                <div className="brand-logo">
                  <img src={logo} alt="logo" />
                </div>
                <h4>Welcome back!</h4>
                <h6 className="font-weight-light">Happy to see you again!</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <label for="exampleInputEmail">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i
                            className="fa fa-user text-primary-color"
                            style={{
                              margin: "auto",
                              position: "relative",
                              top: "-4px",
                            }}
                          ></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        className="form-control form-control-lg border-left-0"
                        id="exampleInputEmail"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="fa fa-lock text-primary-color"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control-lg border-left-0"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label text-muted">
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" className="auth-link text-black">
                      Forgot password?
                    </a>
                  </div>
                  <div className="my-3">
                    <a
                      className="btn btn-block btn-primary-color btn-lg font-weight-medium auth-form-btn"
                      onClick={onSave}
                    >
                      <span>LOGIN</span>
                    </a>
                  </div>
                  <div className="mb-2 d-flex">

                    <button
                      type="button"
                      className="btn btn-facebook  auth-form-btn flex-grow mr-1"
                    >
                      <i className="fab fa-facebook-f mr-2"></i>Facebook
                    </button>

                    <button
                      type="button"
                      className="btn btn-google auth-form-btn flex-grow ml-1"
                    >
                      <i className="fab fa-google mr-2"></i>Google
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <a onClick={() => { history.push("/register") }} className="text-primary-color">
                      Create
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 login-half-bg d-flex flex-row">
              <p className="text-white font-weight-medium text-center flex-grow align-self-end">
                Copyright &copy; 2021 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
