import React from "react";
import AlertsWidget from "../AlertsWidget/AlertsWidget";
import PurpleWidget from "../PurpleWidget/PurpleWidget";
import SocialWidget from "../SocialWidget/SocialWidget";

const DashboardRight = () => {
  return (
    <div class="dashboard-right">
      <AlertsWidget />
      <PurpleWidget />
      <SocialWidget />
    </div>
  );
};

export default DashboardRight;
