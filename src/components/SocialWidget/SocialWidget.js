import React from "react";

const SocialWidget = () => {
  return (
    <div class="social-share">
      {" "}
      <a href="#" class="btn-fb">
        <i class="fa fa-facebook" aria-hidden="true" /> Post to Facebook
      </a>{" "}
      <a href="#" class="btn-tw">
        <i class="fa fa-twitter" aria-hidden="true" /> Post to Twitter
      </a>{" "}
      <a href="#" class="btn-in">
        <i class="fa fa-linkedin" aria-hidden="true" /> Post to Linked In
      </a>{" "}
    </div>
  );
};

export default SocialWidget;
