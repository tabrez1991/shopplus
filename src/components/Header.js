import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { showLogin, showNavbar } from "../actions/home";

const Header = (props) => {
  const handleNavbar = () => {
    if (props.show_navbar) {
      props.showNavbar(false);
    } else {
      props.showNavbar(true)
    }
  }
  return (
    <Fragment>
      <header class="row border-bottom">
        <div class="col-12 px-0 top-gry">
          <div class="container">
            <div class="row">
              <div class="text-right col-12">
                <ul class="list-inline top-links">
                  {!window.location.href.includes('brand') ? <li class="list-inline-item" onClick={() => props.showLogin(true)}>
                    <a href="#" data-toggle="modal" data-target="#login">
                      Login/Register
                    </a>
                  </li> :
                    <li class="list-inline-item dropdown"> <a class="dropdown-toggle" href="#" id="ProfileMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hi Amitabh Kumar!</a>
                      <div class="dropdown-menu dropdown-menu-right shadow rounded-0 fs-14 border-0 mt-1" aria-labelledby="ProfileMenu">
                        <a class="d-block p-2 lh-1" href="#"> <span class="pr-2"><img src={require("../assets/images/profile-icon.png")} /></span> My Profile</a>
                        <a class="d-block p-2 lh-1" href="#"> <span class="pr-2"><img src={require("../assets/images/tr-icon.png")} /></span> My Transaction</a>
                        <a class="d-block p-2 lh-1" href="#"> <span class="pr-2"><img src={require("../assets/images/logout-icon.png")} /></span> Logout</a>
                      </div>
                    </li>}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 px-0 bg-white py-3">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-5 col-md-4">
                <ul class="list-inline m-0">
                  <li class="list-inline-item">
                    <div
                      class="hamburger-icon"
                      id="desktop-hamburger"
                      onClick={handleNavbar}
                    >
                      <div class="top"></div>
                      <div class="middle"></div>
                      <div class="bottom"></div>
                    </div>
                  </li>
                  <li class="list-inline-item call nowrap">
                    <span>
                      <a href="tel:18001033314">
                        <img
                          src={require("../assets/images/call.png")}
                          alt="logo"
                        />
                      </a>
                    </span>
                    <span class="pl-l fw-700 d-none d-md-inline-block">
                      1800-103-3314
                    </span>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 d-none d-md-block">
                <div class="classSearch">
                  <input
                    type="text"
                    name=""
                    class="form-control"
                    placeholder="Search by Brand / Product"
                  />
                </div>
              </div>
              <div class="col-7 col-md-4 text-right center-logo">
                <Link to="/home">
                  <img
                    src={require("../assets/images/logo.png")}
                    class="img-fluid"
                    alt="logopng"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  show_navbar: state.home.show_navbar
})

export default connect(mapStateToProps, { showLogin, showNavbar })(Header);
