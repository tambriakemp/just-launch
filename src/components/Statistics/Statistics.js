import React from "react";

const Statistics = () => {
  return (
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
  );
};

export default Statistics;
