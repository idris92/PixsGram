import React, {useState} from "react";

export default function Nav() {
 
  return (
    <div>
      <div className="header-container">
        <header className="header navbar navbar-expand-sm">
          <a
            href="javascript:void(0);"
            className="sidebarCollapse"
            data-placement="bottom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </a>

          <div className="nav-logo align-self-center">
            <a className="navbar-brand" href="index.html">
              <img alt="logo" src="assets/img/logo2.svg"  style={{transform:"rotate(180deg)"}}/>{" "}
              <span className="navbar-brand-name">Dragovic</span>
            </a>
          </div>

          <ul className="navbar-item topbar-navigation">
            <div className="topbar-nav header navbar" role="banner">
              <nav id="topbar">
                <ul className="navbar-nav theme-brand flex-row  text-center">
                  <li className="nav-item theme-logo">
                    <a href="index.html">
                      <img
                        src="assets/img/logo2.svg"
                        className="navbar-logo"
                        alt="logo"
                      />
                    </a>
                  </li>
                  {/* <li className="nav-item theme-text">
                    <a href="index.html" className="nav-link">
                      {" "}
                      Dragovic{" "}
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </ul>

          <ul className="navbar-item flex-row ml-auto">
            <li className="nav-item align-self-center search-animated">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-search toggle-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <form
                className="form-inline search-full form-inline search"
                role="search"
              >
                <div className="search-bar">
                  <input
                    type="text"
                    className="form-control search-form-control  ml-lg-auto"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </li>
          </ul>

          <ul className="navbar-item flex-row nav-dropdowns">
            <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1 align-left">
              <a
                href="javascript:void(0);"
                className="nav-link dropdown-toggle user"
                id="user-profile-dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <div className="media">
                  <img
                    src="assets/img/profile-7.jpg"
                    className="img-fluid"
                    alt="admin-profile"
                  />
                </div> */}
              </a>
              <div
                className="dropdown-menu position-absolute"
                aria-labelledby="userProfileDropdown"
              >
                <div className="dropdown-item">
                  <a href="auth_lockscreen.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-lock"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>{" "}
                    <span>Lock Screen</span>
                  </a>
                </div>

                <div className="dropdown-item">
                  <a href="auth_login.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>{" "}
                    <span>Log Out</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}