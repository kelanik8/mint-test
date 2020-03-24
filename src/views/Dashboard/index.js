import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import "./index.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
