import React, { useState } from "react";
import { ReactComponent as SmallChart } from "../../assets/small-chart.svg";
import { ReactComponent as BigChart } from "../../assets/big-chart.svg";

const MainContent = () => {
  const [tableData, setTableData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <main
      role="main"
      className="col-md-9 ml-sm-auto col-lg-10 px-4"
      style={{
        paddingTop: "5em"
      }}
    >
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body p-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted mb-2">
                      Daily Transaction Volume
                    </h6>
                    <span className="h2 mb-0">2,342</span>
                  </div>
                  <div className="col-auto">
                    <SmallChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body p-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted mb-2">
                      Daily Transaction Volume
                    </h6>
                    <span className="h2 mb-0">₦ 4,000,000</span>
                  </div>
                  <div className="col-auto">
                    <SmallChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body p-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted mb-2">
                      Total Transaction Volume
                    </h6>
                    <span className="h2 mb-0">425,000</span>
                  </div>
                  <div className="col-auto">
                    <SmallChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body p-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted mb-2">
                      Total Transaction Volume
                    </h6>
                    <span className="h2 mb-0">₦ 4,000,000</span>
                  </div>
                  <div className="col-auto">
                    <SmallChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-white mr-1 ml-1">
          <div className="col-12 col-lg-7 col-xl-7 pr-0">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                      <h1 className="h2">Today: 5, Aug 2018</h1>
                      <div className="btn-toolbar mb-2 mb-md-0">
                        <button
                          className="btn btn-sm btn-outline-secondary dropdown-toggle"
                          style={{
                            border: "1px solid #DDE0E3",
                            color: "#7F8FA4"
                          }}
                        >
                          1 Jan - 1 Jun
                        </button>
                        <div className="btn-group ml-2">
                          <button
                            className="btn btn-sm"
                            style={{
                              background:
                                "linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%)",
                              border: "1px solid #CED0DA",
                              boxSizing: "border-box",
                              borderRadius: "4px",
                              color: "#CCCFD4"
                            }}
                          >
                            <i className="fas fa-chevron-left"></i>
                          </button>
                          <button
                            className="btn btn-sm ml-2"
                            style={{
                              background:
                                "linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%)",
                              border: "1px solid #CED0DA",
                              boxSizing: "border-box",
                              borderRadius: "4px",
                              color: "#CCCFD4"
                            }}
                          >
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <BigChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-5 pl-0">
            <div className="card">
              <div className="card-body p-2">
                <div className="row align-items-center">
                  <div className="col">
                    <p
                      className="font-weight-bold mb-2"
                      style={{
                        fontSize: "14px",
                        lineHeight: "16px",
                        color: "#262626"
                      }}
                    >
                      Orders
                    </p>
                    <div
                      className="progress h-2 mb-4"
                      style={{ height: "4px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%", background: "#27AE60" }}
                      ></div>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "15%", background: "#FDC203" }}
                      ></div>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          color: "#262626"
                        }}
                      >
                        Pending Orders:
                        <span className="text-warning"> 20</span>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          color: "#262626"
                        }}
                      >
                        Reconciled Orders:
                        <span className="text-success"> 80</span>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          color: "#262626"
                        }}
                      >
                        Total Orders:
                        <span className="text-info"> 100</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body p-2">
                <div className="row align-items-center">
                  <div className="col">
                    <p
                      className="font-weight-bold mb-2"
                      style={{
                        fontSize: "14px",
                        lineHeight: "16px",
                        color: "#262626"
                      }}
                    >
                      Payments
                    </p>
                    <div
                      className="progress h-2 mb-4"
                      style={{ height: "4px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%", background: "#27AE60" }}
                      ></div>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "15%", background: "#FDC203" }}
                      ></div>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          color: "#262626"
                        }}
                      >
                        Un - Reconciled Payments:
                        <span className="text-warning"> 20</span>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          color: "#262626"
                        }}
                      >
                        Reconciled Payments:
                        <span className="text-success"> 80</span>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          color: "#262626"
                        }}
                      >
                        Total Payments:
                        <span className="text-info"> 100</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-white">
                <h5>Payment</h5>
              </div>
              <div className="card-body p-0">
                <div className="card-header-action">
                  {/* <form>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <div className="input-group-btn">
                              <button className="btn btn-primary">
                                <i className="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </form> */}
                </div>
                <div className="table-responsive">
                  <table className="table" id="sortable-table">
                    <thead
                      style={{
                        background: "#EAEEF0"
                      }}
                    >
                      <tr>
                        <th>Item Type</th>
                        <th>Price</th>
                        <th>Transaction No</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map(() => (
                        <tr>
                          <td>
                            <div className="avatar mr-2 avatar-sm text-white">
                              <p>VM</p>
                            </div>
                            Apple Mac Book 15” 250 SSD 12GB
                          </td>
                          <td className="align-middle">$73430</td>
                          <td className="align-middle">1234567890</td>
                          <td>12:30</td>
                          <td className="align-middle">
                            <button
                              type="button"
                              className="btn btn-outline-light rounded-pill text-success tb-btn"
                              style={{
                                border: "1px solid #CCCFD4"
                              }}
                            >
                              <div className="ellipse"></div>
                              Reconcilled
                            </button>
                          </td>
                          <td className="align-middle">
                            <i
                              className="fas fa-chevron-down"
                              style={{ color: "#CCCFD4" }}
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card-footer bg-white border-0">
                <nav class="d-flex justify-content-between">
                  <p
                    className=""
                    style={{
                      fontSize: "13px"
                    }}
                  >
                    Showing 1 to 10 of 500 entries
                  </p>
                  <ul
                    class="pagination mb-0"
                    style={{
                      fontSize: "12px"
                    }}
                  >
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        Previous
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1 <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
