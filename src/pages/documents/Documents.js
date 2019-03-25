import React, { Component } from "react";

class Documents extends Component {
  render() {
    return (
      <section class="dashboard">
        <div class="row display-table-row">
          <div class="left-menu">
            <div id="logo-container">
              <div class="logo">
                <a href="login.html">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="navigation">
              <h2>Navigations</h2>

              <ul class="menu">
                <li>
                  <a href="dashboard.html">
                    <i class="fa fa-th-large" aria-hidden="true" /> Dashboard
                  </a>
                </li>
                <li>
                  <a href="documents.html">
                    <i class="fa fa-th" aria-hidden="true" /> Notes
                  </a>
                </li>
                <li>
                  <a href="documents.html" class="active">
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
                      <a href="#">
                        <figure />
                        George Martin{" "}
                        <i class="fa fa-caret-down" aria-hidden="true" />
                      </a>
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
                <div class="upload-area bg-shadow">
                  <h2>
                    <i class="fa fa-paperclip" aria-hidden="true" /> Attach File
                  </h2>
                  <p>
                    Attach up to 10 file at a time, Total file size may not
                    exceed 25 MB
                  </p>
                  <label class="file">
                    <input
                      type="file"
                      id="file"
                      aria-label="File browser example"
                    />
                    <span class="file-custom" />
                  </label>
                  <div class="dual-btn">
                    <a href="#" class="btn-purple btn-default">
                      Attach File
                    </a>
                    <a href="#" class="btn-default">
                      Cancel
                    </a>
                  </div>
                </div>

                <div class="table-area bg-shadow">
                  <h3>Basic Table</h3>
                  <p>Use class inside table element</p>
                  <table>
                    <tr class="border">
                      <th>File name</th>
                      <th>Owner</th>
                      <th>Size</th>
                      <th>Date Modified</th>
                    </tr>
                    <tr>
                      <td>Internal dresscode.docx</td>
                      <td>Desmond Eagle</td>
                      <td>2.4 MB</td>
                      <td>12 Mar 2018</td>
                    </tr>
                    <tr>
                      <td>Vaction plans.xls</td>
                      <td>Abraham Pigeon</td>
                      <td>4.6 MB</td>
                      <td>28 Mar 2018</td>
                    </tr>
                    <tr>
                      <td>International guests rules.docx</td>
                      <td>Jarvis Pepperspray</td>
                      <td>3.9 MB</td>
                      <td>20 Apr 2018</td>
                    </tr>
                    <tr>
                      <td>Parties description.ppt</td>
                      <td>Dominic L. Ement</td>
                      <td>467 KB</td>
                      <td>02 May 2018</td>
                    </tr>
                    <tr>
                      <td>Employee rules.docx</td>
                      <td>Samuel Serif</td>
                      <td>1.8 MB</td>
                      <td>21 May 2018</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <footer class="site-footer">
              2019 Copyrights &copy;{" "}
              <a href="#" target="_blank">
                Bree
              </a>
            </footer>
          </div>
        </div>
      </section>
    );
  }
}

export default Documents;
