import React from "react";

const TitleBar = () => {
  return (
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
  );
};

export default TitleBar;
