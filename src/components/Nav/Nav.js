import React from "react";

const Nav = () => {
  return (
    <div class="left-menu">
      <div id="logo-container">
        <div class="logo">
          {" "}
          <a href="login.html">
            <img src="images/logo.png" alt="" />
          </a>{" "}
        </div>
      </div>
      <div class="navigation">
        <h2>Navigations</h2>
        <ul class="menu">
          <li>
            <a href="dashboard.html" class="active">
              <i class="fa fa-th-large" aria-hidden="true" /> Dashboard
            </a>
          </li>
          <li>
            <a href="documents.html">
              <i class="fa fa-th" aria-hidden="true" /> Notes
            </a>
          </li>
          <li>
            <a href="documents.html">
              <i class="fa fa-envelope" aria-hidden="true" /> Documents
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-shopping-cart" aria-hidden="true" /> References
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
