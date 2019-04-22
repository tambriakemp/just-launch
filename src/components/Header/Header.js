import React from "react";

const Header = () => {
  return (
    <div id="top-bar-section">
      <div class="top-bar">
        <div class="search-area">
          <form class="search form-group">
            <input type="search" placeholder="Search..." required />
          </form>
        </div>
        <div class="author-info">
          <ul>
            <li class="circle">
              <a href="#">
                <i class="fa fa-envelope" aria-hidden="true" />
              </a>
            </li>
            <li class="circle">
              <a href="#">
                <i class="fa fa-bell" aria-hidden="true" />
              </a>
            </li>
            <li class="author-image">
              {" "}
              <a href="#">
                <figure />
                George Martin <i
                  class="fa fa-caret-down"
                  aria-hidden="true"
                />{" "}
              </a>{" "}
            </li>
            <li id="mobile_menu">
              <a href="#">
                <i class="fa fa-bars" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
