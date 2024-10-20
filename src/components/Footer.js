import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-secondary py-5 px-sm-3 px-md-5"
        style={{ marginTop: 90 }}
      >
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">
              Liên Hệ Với Chúng Tôi
            </h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-white mr-3" />
              123 Đường, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-white mr-3" />
              +012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope text-white mr-3" />
              info@example.com
            </p>
            <h6 className="text-uppercase text-white py-2">
              Theo Dõi Chúng Tôi
            </h6>
            <div className="d-flex justify-content-start">
              <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-lg btn-dark btn-lg-square" href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Liên Kết Hữu Ích</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Chính Sách Bảo Mật
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Điều Khoản &amp; Điều Kiện
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Đăng Ký Thành Viên Mới
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Chương Trình Đối Tác
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Hoàn Trả &amp; Đổi Hàng
              </a>
              <a className="text-body" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Trợ Giúp &amp; Câu Hỏi Thường Gặp
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">
              Phòng trưng bày xe
            </h4>
            <div className="row mx-n1">
              <div className="col-4 px-1 mb-2">
                <a href="">
                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/assets/img/gallery-1.jpg`}
                    alt="Gallery"
                  />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a href="">
                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/assets/img/gallery-2.jpg`}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a href="">
                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/assets/img/gallery-3.jpg`}
                    alt="Gallery"
                  />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a href="">
                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/assets/img/gallery-4.jpg`}
                    alt="Gallery"
                  />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a href="">
                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/assets/img/gallery-5.jpg`}
                    alt="Gallery"
                  />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a href="">
                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/assets/img/gallery-6.jpg`}
                    alt="Gallery"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Bản Tin</h4>
            <p className="mb-4">
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sed kasd et
            </p>
            <div className="w-100 mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-dark border-dark"
                  style={{ padding: 25 }}
                  placeholder="Email Của Bạn"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary text-uppercase px-3">
                    Đăng Ký
                  </button>
                </div>
              </div>
            </div>
            <i>Lorem sit sed elitr sed kasd et</i>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
        <p className="mb-2 text-center text-body">
          © <a href="#">Car rental</a>. Bảo Lưu Tất Cả Quyền.
        </p>
        <p className="m-0 text-center text-body">
          Thiết Kế Bởi <a href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>

      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
}

export default Footer;
