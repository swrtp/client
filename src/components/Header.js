import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showActivationMessage, setShowActivationMessage] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    const isActive = queryParams.get("active");
    if (isActive) {
      if (isActive === "false") {
        setShowActivationMessage(
          "Bạn đã tạo tài khoản thành công. Để kích hoạt tài khoản, vui lòng truy cập vào đường link được gửi qua email đã đăng ký để có thể đăng nhập, xin cảm ơn."
        );
      } else if (isActive === "true") {
        setShowActivationMessage(
          "Kích hoạt tài khoản thành công. Bây giờ, bạn đã có thể đăng nhập bằng tài khoản này."
        );
      } else {
        setShowActivationMessage(null);
      }
      navigate(location.pathname, { replace: true });
    }
  }, [navigate, queryParams, location.pathname]);
  useEffect(() => {
    setShowActivationMessage(null);
  }, [user]);
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <Link className="text-body pr-3" href="">
                <i className="fa fa-phone-alt mr-2" />
                +012 345 6789
              </Link>
              <span className="text-body">|</span>
              <Link className="text-body px-3" href="">
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <Link className="text-body px-3" href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="text-body px-3" href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="text-body px-3" href="">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link className="text-body px-3" href="">
                <i className="fab fa-instagram" />
              </Link>
              <Link className="text-body pl-3" href="">
                <i className="fab fa-youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
            <Link to="" className="navbar-brand">
              <h1 className="text-uppercase text-primary mb-1">Royal Cars</h1>
            </Link>
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
                  Trang chủ
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  Giới thiệu
                </Link>
                {/* <Link to="/service" className="nav-item nav-link">
                  Dịch vụ
                </Link> */}
                <Link to="/cars" className="nav-item nav-link">
                  Danh mục xe
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Liên hệ
                </Link>
                {user ? (
                  <div className="nav-item dropdown d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="dropdown-toggle d-flex justify-content-center align-items-center"
                      data-toggle="dropdown"
                    >
                      <div className="avatar p-1">
                        <img
                          src={user.avatar}
                          alt="Avatar"
                          style={{ width: 30, height: 30, borderRadius: 50 }}
                        />
                      </div>
                      <div className="infor p-1">
                        <p style={{ fontSize: 14 }} className="p-0 m-0">
                          {user.displayName}
                        </p>
                        <p
                          style={{ fontSize: 12, opacity: 0.7 }}
                          className="p-0 m-0"
                        >
                          {user.verifyStatus}
                        </p>
                      </div>
                    </div>
                    <div className="dropdown-menu rounded-0 m-0">
                      <Link to="/detail" className="dropdown-item">
                        Chi tiết xe
                      </Link>
                      <Link to="/booking" className="dropdown-item">
                        Đặt xe
                      </Link>
                      <Link to="/profile" className="dropdown-item">
                        Trang cá nhân
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link to="/login" className="nav-item nav-link">
                    Đăng nhập
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Search Start */}
      <div className="container-fluid bg-white pt-3 px-lg-5">
        <div className="row mx-n2">
          <div className="col-xl-4 col-lg-4 col-md-6 px-2">
            <div className="date mb-3" id="date" data-target-input="nearest">
              <input
                type="text"
                className="form-control p-4 datetimepicker-input"
                placeholder="Gợi ý xe (Tên xe hoặc mã code xe)"
                data-target="#date"
                data-toggle="datetimepicker"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <div className="date mb-3" id="date" data-target-input="nearest">
              <input
                type="text"
                className="form-control p-4 datetimepicker-input"
                placeholder="Ngày Nhận"
                data-target="#date"
                data-toggle="datetimepicker"
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <div className="date mb-3" id="date" data-target-input="nearest">
              <input
                type="text"
                className="form-control p-4 datetimepicker-input"
                placeholder="Ngày Trả"
                data-target="#date"
                data-toggle="datetimepicker"
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
              <option selected="">Địa Điểm Trả</option>
              <option value={1}>Địa Điểm 1</option>
              <option value={2}>Địa Điểm 2</option>
              <option value={3}>Địa Điểm 3</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 px-2">
            <button
              className="btn btn-primary btn-block mb-3"
              type="submit"
              style={{ height: 50 }}
            >
              Tìm Kiếm
            </button>
          </div>
        </div>
      </div>
      {showActivationMessage && (
        <div class="alert alert-success" role="alert">
          {showActivationMessage}
        </div>
      )}
      {/* Search End */}
    </div>
  );
}

export default Header;
