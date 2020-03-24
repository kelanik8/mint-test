import React from "react";
import { ReactComponent as OverviewIcon } from "../../assets/overview-icon.svg";
import { ReactComponent as AllPayments } from "../../assets/all-payments-icon.svg";
import { ReactComponent as ReconciledPayments } from "../../assets/reconciled-payments-icon.svg";
import { ReactComponent as UnReconciledPayments } from "../../assets/un-reconcile-payments-icon.svg";
import { ReactComponent as ManualSettlements } from "../../assets/manual-payments-icon.svg";
import { ReactComponent as AllOrders } from "../../assets/all-orders-icon.svg";
import { ReactComponent as PendingOrders } from "../../assets/pending-orders-icon.svg";
import { ReactComponent as ReconciledOrders } from "../../assets/reconciled-orders-icon.svg";
import { ReactComponent as MerchantProfile } from "../../assets/merchant-profile-icon.svg";

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-white sidebar">
      <div className="sidebar-sticky">
        <div className="container">
          <buttton className="generate-invoice-btn">Generate Invoice</buttton>
        </div>
        <br />
        <ul className="sidebar-menu">
          <li className="menu-header">Main</li>
          <li className="nav-item dropdown active">
            <a href="#" className="nav-link sidebar-nav-link">
              <OverviewIcon />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Overview</span>
            </a>
          </li>
        </ul>
        <ul className="sidebar-menu">
          <li className="menu-header">Payments</li>
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link sidebar-nav-link sidebar-nav-link sidebar-nav-link"
            >
              <AllPayments />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>All Payments</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link sidebar-nav-link">
              <ReconciledPayments />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Reconciled Payments</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link sidebar-nav-link">
              <UnReconciledPayments />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Un - Reconciled Payments</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link sidebar-nav-link">
              <ManualSettlements />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Manual Settlements</span>
            </a>
          </li>
        </ul>
        <ul className="sidebar-menu">
          <li className="menu-header">Orders</li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link sidebar-nav-link">
              <AllOrders />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>All Orders</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link sidebar-nav-link">
              <PendingOrders />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Pending Orders</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link sidebar-nav-link">
              <ReconciledOrders />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Reconciled Orders</span>
            </a>
          </li>
        </ul>
        <ul className="sidebar-menu">
          <li className="nav-item dropdown">
            <a href="#" className="nav-link sidebar-nav-link">
              <MerchantProfile />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Merchant Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Sidebar;
