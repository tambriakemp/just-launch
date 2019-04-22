import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import DashboardRight from "../components/DashboardRight/DashboardRight";
import Header from "../components/Header/Header";
import TitleBar from "../components/TitleBar/TitleBar";
import TableArea from "../components/TableArea/TableArea";
import Statistic from "../components/Statistics/Statistics";
import styled from "styled-components";

const Dashboard = styled.div`
  height: 100%;
  width: 100%;
  display: table;
`;

class Dashboard extends Component {
  render() {
    return (
      <section class="dashboard">
        <Nav />
        <div class="row display-table-row">
          <div class="right-area">
            <Header />
            <TitleBar />
            <div class="dashboard-content">
              <div class="dashboard-inner">
                <div class="dashboard-left">
                  <Statistic />
                  <TableArea />
                </div>
                <DashboardRight />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
