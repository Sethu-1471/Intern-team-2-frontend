import React, { useEffect, useState } from 'react';
import './Register.css';
import logo from '../../Assets/favicon.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { register } from '../../api/index';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom' 

function Register() {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  let history = useHistory();

  const onSave = () => {
    let payload = {
      name,
      contactNo,
      email,
      dob,
      country,
      password,
      isAdmin,
    };
    register(payload).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        history.push("/login");
      } else {
        toast.error(res.data.message);
      }
    });
  };

    const handleDropdownChange = (e) => {
        setCountry(e.target.value)
    }
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
                                    <h4>New here?</h4>
                                    <h6 className="font-weight-light">Join us today! It takes only few steps</h6>
                                    <form className="pt-3">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className=" fa fa-user text-primary"></i>
                                                        <FontAwesomeIcon icon="user" /> 
                                                    </span>
                                                </div>
                                                <input type="text" onChange={e => setName(e.target.value)}  className="form-control form-control-lg border-left-0" placeholder="Username" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Contact No</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="fa fa-phone text-primary"></i>
                                                        <FontAwesomeIcon icon="phone-alt" /> 
                                                    </span>
                                                </div>
                                                <input type="tel" onChange={e => setContactNo(e.target.value)}  className="form-control form-control-lg border-left-0" placeholder="Contact no" maxLength="10" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="far fa-envelope-open text-primary"></i>
                                                        <FontAwesomeIcon icon="envelope" /> 
                                                    </span>
                                                </div>
                                                <input type="email" onChange={e => setEmail(e.target.value)}  className="form-control form-control-lg border-left-0" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>DOB</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="fa fa-birthday-cake text-primary"></i>
                                                        <FontAwesomeIcon icon="birthday-cake" /> 
                                                    </span>
                                                </div>
                                                <input type="Date" onChange={e => setDob(e.target.value)}  className="form-control form-control-lg border-left-0" placeholder="Dob" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Country</label>
                                            <select onChange={handleDropdownChange} className="form-control form-control-lg" id="exampleFormControlSelect2">
                                                <option>Country</option>
                                                <option>United States of America</option>
                                                <option>United Kingdom</option>
                                                <option>India</option>
                                                <option>Germany</option>
                                                <option>Argentina</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="fa fa-lock text-primary"></i>
                                                        <FontAwesomeIcon icon="lock" /> 
                                                    </span>
                                                </div>
                                                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="d-flex">
                                                <span>
                                                    <input onChange={e => setIsAdmin(e.target.value)}  type="radio" id="admin" name="Admin" value="true" />
                                                    <label for="admin">Teacher</label>
                                                </span>
                                                <span>
                                                    <input onChange={e => setIsAdmin(e.target.value)}   type="radio" id="admin1" name="Admin" value="false" />
                                                    <label for="admin">Student</label>
                                                </span>
                                            </div>

                                        </div>

                  <div className="form-group">
                    <label>Contact No</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="far fa-phone text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="tel"
                        onChange={(e) => setContactNo(e.target.value)}
                        className="form-control form-control-lg border-left-0"
                        placeholder="Contact no"
                        maxLength="10"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="far fa-envelope-open text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control-lg border-left-0"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>DOB</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="far fa-calendar text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="Date"
                        onChange={(e) => setDob(e.target.value)}
                        className="form-control form-control-lg border-left-0"
                        placeholder="Dob"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      onChange={handleDropdownChange}
                      className="form-control form-control-lg"
                      id="exampleFormControlSelect2"
                    >
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="fa fa-lock text-primary"></i>
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
                  <div className="form-group">
                    <div className="d-flex">
                      <span>
                        <input
                          onChange={(e) => setIsAdmin(e.target.value)}
                          type="radio"
                          id="admin"
                          name="Admin"
                          value="true"
                        />
                        <label for="admin">Teacher</label>
                      </span>
                      <span>
                        <input
                          onChange={(e) => setIsAdmin(e.target.value)}
                          type="radio"
                          id="admin1"
                          name="Admin"
                          value="false"
                        />
                        <label for="admin">Student</label>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />I
                        agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      href="#"
                      onClick={onSave}
                    >
                      SIGN UP
                    </a>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <a href="Login_Page.html" className="text-primary">
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 register-half-bg d-flex flex-row">
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

export default Register;
