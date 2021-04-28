import React, { Component } from 'react';
import './Register.css';
import logo from '../../Assets/favicon.png';
import { register} from '../../api/index';

class Register extends Component {
    state  = {
        name:"",
        contactNo: "",
        email: "",
        createdAt: "",
        country: "",
        password: "",
        isAdmin: false,

    }
    render() {
        return (


            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                        <div className="row flex-grow">
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <div className="auth-form-transparent text-left p-3">
                                    <div className="brand-logo">
                                       <img src= {logo} alt="logo" />
                                    </div>
                                    <h4>New here?</h4>
                                    <h6 className="font-weight-light">Join us today! It takes only few steps</h6>
                                    <form className="pt-3">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="fa fa-user text-primary"></i>
                                                    </span>
                                                </div>
                                                <input type="text"  onChange={e => this.onNameChange(e.target.value)} value={this.state.name}  className="form-control form-control-lg border-left-0" placeholder="Username" />
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
                                                <input type="tel" onChange={e => this.onContactChange(e.target.value)} value={this.state.contact}  className="form-control form-control-lg border-left-0" placeholder="Contact no" maxLength="10" />
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
                                                <input type="email" onChange={e => this.onEmailChange(e.target.value)} value={this.state.email} className="form-control form-control-lg border-left-0" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Date</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="far fa-calendar text-primary"></i>
                                                    </span>
                                                </div>
                                                <input type="date" onChange={e => this.onDateChange(e.target.value)} value={this.state.date} className="form-control form-control-lg border-left-0" placeholder="Date" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Country</label>
                                            <select  onChange={this.handleDropdownChange} className="form-control form-control-lg" id="exampleFormControlSelect2">
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
                                                <input type="password" onChange={e => this.onPasswordChange(e.target.value)} value={this.state.password} className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="form-check">
                                                <label className="form-check-label text-muted">
                                                    <input type="checkbox" className="form-check-input" />
                          I agree to all Terms & Conditions
                        </label>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="#"  onClick={this.onSave} >SIGN UP</a>
                                        </div>
                                        <div className="text-center mt-4 font-weight-light">
                                            Already have an account? <a href="Login_Page.html" className="text-primary">Login</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 register-half-bg d-flex flex-row">
                                <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2021  All rights reserved.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    onSave = () =>{

    register(this.state)
        
      }
      

    onNameChange(value){
        this.setState({
             name: value
        });
    }

    onContactChange(value){
        this.setState({
             contactNo: value
        });
    }

    onEmailChange(value){
        this.setState({
             email: value
        });
      }

      onDateChange(value){
        this.setState({
             createdAt: value
        });
      }

      onPasswordChange(value){
        this.setState({
            password: value
        });
      }
      handleDropdownChange = (e) => {
        this.setState({ country: e.target.value });
      }
    
}

export default Register;