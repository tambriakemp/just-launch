import React, { Component } from "react";

class Login extends Component {
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
                  today and choose the type of <br />
                  business you want to start and get help with action items
                  needed to launch your business.{" "}
                </p>
              </li>
              <li class="slider-area">
                <h2>JUST LAUNCH Two</h2>
                <p>
                  Confused on the steps needed to start your business? Sign up
                  today and choose the type of <br />
                  business you want to start and get help with action items
                  needed to launch your business.{" "}
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
                Ph - (+1)804-873-7820
                <br />
                Fax - (+1)714-443-5479
              </p>
            </div>
          </div>
        </div>
        <div class="login-right">
          <div class="login-form">
            <h1>Login into Your Account</h1>
            <form method="post" action="/">
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
                <div class="form-meta clearfix">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="keep" />
                      Keep me signed in
                    </label>
                  </div>
                  <div class="forgot-password">
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>
              </div>
              <div class="form-group submit">
                <input type="submit" name="submit" value="Login" />
              </div>
              <div class="sign-up-link">
                Don’t have an account? <a href="#">Register Now</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
