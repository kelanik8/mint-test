import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-custom"
      style={{
        zIndex: 1
      }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand navbar-brand-custom" href="#">
        TransMonitor
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <form className="form-inline mr-auto my-2 my-lg-0">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-search"></i>
              </div>
            </div>
            <input
              className="form-control mr-sm-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 p-2">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Support
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>
          <li
            className="nav-item active"
            style={{
              position: "relative"
            }}
          >
            <a className="nav-link notification-count" href="#">
              <i className="far fa-bell"></i>
            </a>
          </li>
          <li
            className="nav-item active"
            style={{
              position: "relative"
            }}
          >
            <a className="nav-link" href="#">
              <span className="sup-text">Hello</span>
              <span>Oluwaleke Ojo</span>
              <figure
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/originals/1e/ef/72/1eef72823743d9c47d8840e55b0823f0.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                class="avatar mr-2 avatar-sm"
              >
                {/* <img
                  src=""
                  alt="Profile Picture"
                /> */}
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
