import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-body pr-3" href="">
                <i className="fa fa-phone-alt mr-2" />
                +012 345 6789
              </a>
              <span className="text-body">|</span>
              <a className="text-body px-3" href="">
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-body px-3" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-body px-3" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-body px-3" href="">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-body px-3" href="">
                <i className="fab fa-instagram" />
              </a>
              <a className="text-body pl-3" href="">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
            <a href="" className="navbar-brand">
              <h1 className="text-uppercase text-primary mb-1">Royal Cars</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/cars" className="nav-item nav-link">
                  Danh mục
                </Link>
                <Link to="/service" className="nav-item nav-link">
                  Thuê xe
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Liên hệ
                </Link>
                <Link to="/login" className="nav-item nav-link">
                  Đăng nhập
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Search Start */}
      <div className="container-fluid bg-white pt-3 px-lg-5">
        <div className="row mx-n2">
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
              <option selected="">Pickup Location</option>
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
              <option selected="">Drop Location</option>
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <div className="date mb-3" id="date" data-target-input="nearest">
              <input
                type="date"
                className="form-control p-4 datetimepicker-input"
                placeholder="Pickup Date"
                data-target="#date"
                data-toggle="datetimepicker"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <div className="date mb-3" id="date" data-target-input="nearest">
              <input
                type="date"
                className="form-control p-4 datetimepicker-input"
                placeholder="Pickup Date"
                data-target="#date"
                data-toggle="datetimepicker"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
              <option selected="">Select A Car</option>
              <option value={1}>Car 1</option>
              <option value={2}>Car 1</option>
              <option value={3}>Car 1</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <button
              className="btn btn-primary btn-block mb-3"
              type="submit"
              style={{ height: 50 }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Search End */}
    </div>
  );
}

export default Header;
