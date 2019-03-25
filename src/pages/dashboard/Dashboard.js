import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <section class="dashboard">
        <div class="row display-table-row">
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
                    <i class="fa fa-shopping-cart" aria-hidden="true" />{" "}
                    References
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-area">
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
                        George Martin{" "}
                        <i class="fa fa-caret-down" aria-hidden="true" />{" "}
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
            <div class="dashboard-title-bar">
              <div class="title">
                <h1>Just Launch Portal</h1>
              </div>
              <div class="breadcrumb">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Job Hosting</li>
                </ul>
              </div>
            </div>
            <div class="dashboard-content">
              <div class="dashboard-inner">
                <div class="dashboard-left">
                  <div class="bg-shadow">
                    <div class="chart-area">
                      <div class="chart">
                        <div class="c100 p40 green">
                          {" "}
                          <span>15310</span>
                          <div class="slice">
                            <div class="bar" />
                            <div class="fill" />
                          </div>
                        </div>
                        <label>Task</label>
                      </div>
                      <div class="chart">
                        <div class="c100 p80 pink">
                          {" "}
                          <span>548</span>
                          <div class="slice">
                            <div class="bar" />
                            <div class="fill" />
                          </div>
                        </div>
                        <label>Notes</label>
                      </div>
                      <div class="chart">
                        <div class="c100 p35 blue">
                          {" "}
                          <span>154</span>
                          <div class="slice">
                            <div class="bar" />
                            <div class="fill" />
                          </div>
                        </div>
                        <label>Documents</label>
                      </div>
                      <div class="chart orrange">
                        <div class="c100 p20 orange">
                          {" "}
                          <span>96</span>
                          <div class="slice">
                            <div class="bar" />
                            <div class="fill" />
                          </div>
                        </div>
                        <label>References</label>
                      </div>
                    </div>
                  </div>
                  <div class="table-area">
                    <div class="table-title clearfix">
                      <h3>Task to complete launch</h3>
                      <div class="filters">
                        <label>
                          <input type="checkbox" />
                          Select All
                        </label>
                        <a href="#" class="btn-default">
                          Delete
                        </a>
                        <a href="#" class="btn-default">
                          View More
                        </a>{" "}
                      </div>
                    </div>
                    <table>
                      <tr>
                        <th class="width-40">Title</th>
                        <th>Posted</th>
                        <th>Expires</th>
                        <th>Scheduled</th>
                        <th>
                          <a href="#">
                            Location <i class="fa fa-sort" aria-hidden="true" />
                          </a>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            Survey of looking mountain
                          </label>
                        </td>
                        <td>14.06.2018</td>
                        <td>20.06.2018</td>
                        <td>Art Designer</td>
                        <td>New York</td>
                      </tr>
                      <tr class="active">
                        <td>
                          <label>
                            <input type="checkbox" />
                            Progress Indicator
                          </label>
                        </td>
                        <td>17.06.2018</td>
                        <td>24.06.2018</td>
                        <td>Occasional Job</td>
                        <td>Los Angeles</td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            Tondem line offer new business
                          </label>
                        </td>
                        <td>22.06.2018</td>
                        <td>27.06.2018</td>
                        <td>Occasional Job</td>
                        <td>Houston</td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            iOS Application Developer
                          </label>
                        </td>
                        <td>04.07.2018</td>
                        <td>12.07.2018</td>
                        <td>UX Designer</td>
                        <td>Jacksonville</td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            Blueslice Expenses Server
                          </label>
                        </td>
                        <td>14.07.2018</td>
                        <td>21.07.2018</td>
                        <td>UI/UX Designer</td>
                        <td>San Antonio</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="dashboard-right">
                  <div class="color-box orrange">
                    <div class="number">69</div>
                    <div class="box-content">
                      <h3>Alerts</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies necessary.
                      </p>
                      <a href="#">More Info</a>{" "}
                    </div>
                  </div>
                  <div class="color-box purple">
                    <div class="number">104</div>
                    <div class="box-content">
                      <h3>Total Job Providers</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies necessary.
                      </p>
                      <a href="#">More Info</a>{" "}
                    </div>
                  </div>
                  <div class="social-share">
                    {" "}
                    <a href="#" class="btn-fb">
                      <i class="fa fa-facebook" aria-hidden="true" /> Post to
                      Facebook
                    </a>{" "}
                    <a href="#" class="btn-tw">
                      <i class="fa fa-twitter" aria-hidden="true" /> Post to
                      Twitter
                    </a>{" "}
                    <a href="#" class="btn-in">
                      <i class="fa fa-linkedin" aria-hidden="true" /> Post to
                      Linked In
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <footer class="site-footer">
              {" "}
              2019 Copyrights &copy;{" "}
              <a href="#" target="_blank">
                Bree
              </a>{" "}
            </footer>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
