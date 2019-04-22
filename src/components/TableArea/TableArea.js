import React from "react";

const TableArea = () => {
  return (
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
  );
};

export default TableArea;
