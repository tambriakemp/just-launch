import React, { Component } from "react";
// import "../../styles/grid.css";
// import "./register.css";
import "../../index.css";

class Register extends Component {
  render() {
    return (
      <section class="login-area clearfix">
        <div class="login-left dark bg-section">
          <div class="bottom-area ">
            <ul class="rslides">
              <li class="slider-area">
                <h2>JUST LAUNCH</h2>
                <p>
                  Confused on the steps needed to start your business? Sign up
                  today and choose the type of
                  <br /> business you want to start and get help with action
                  items needed to launch your business.{" "}
                </p>
              </li>
              <li class="slider-area">
                <h2>JUST LAUNCH Two</h2>
                <p>
                  Confused on the steps needed to start your business? Sign up
                  today and choose the type of
                  <br /> business you want to start and get help with action
                  items needed to launch your business.{" "}
                </p>
              </li>
              <li class="slider-area">
                <h2>JUST LAUNCH Three</h2>
                <p>
                  Confused on the steps needed to start your business? Sign up
                  today and choose the type of <br />
                  business you want to start and get help with action items
                  needed to launch your business.{" "}
                </p>
              </li>
            </ul>
            <div class="phone-area">
              <p>
                Ph - (+1)804-873-7820 <br />
                Fax - (+1)714-443-5479
              </p>
            </div>
          </div>
        </div>
        <div class="login-right">
          <div class="login-form">
            <h1>Create Your Account</h1>
            <form method="post" action="/">
              <div class="form-group">
                <label>User Name*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Deneen R. Mitchell"
                  required
                />
              </div>
              <div class="form-group">
                <label>Email ID*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="yourname@company.com"
                  required
                />
              </div>
              <div class="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="****************"
                  required
                />
              </div>
              <div class="form-group">
                <label>Business Type*</label>
                <select name="buss-type">
                  <option>Business Type 1</option>
                  <option>Business Type 2</option>
                  <option>Business Type 3</option>
                </select>
                <div class="form-meta clearfix">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="keep" />
                      By Signing Up, I Agree with{" "}
                      <a href="#" class="frm-link">
                        Terms & Condition
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group submit">
                <input type="submit" name="submit" value="Login" />
              </div>
              <div class="sign-up-link">
                I’m already member? <a href="#">Login</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
