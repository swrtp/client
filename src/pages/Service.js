import React from "react";

function Service() {
    return(
        <div>
            <>
                    {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Dịch vụ</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0">
                            <a className="text-white" href="/">
                                Trang chủ
                            </a>
                        </h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Dịch vụ</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Services Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">
                            Dịch vụ của chúng tôi
                        </h1>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <i className="fa fa-2x fa-taxi text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">01</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Cho thuê xe </h4>
                                    <p className="m-0">
                                        Dịch vụ cho thuê xe cung cấp nhiều loại xe đa dạng, giúp khách hàng dễ dàng di chuyển linh hoạt và tiện lợi cho các chuyến đi cá nhân hoặc công tác.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <i className="fa fa-2x fa-money-check-alt text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">02</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Tài trợ xe</h4>
                                    <p className="m-0">
                                        Dịch vụ tài trợ xe giúp khách hàng dễ dàng sở hữu phương tiện di chuyển với mức vay lên đến 80% giá trị xe và lãi suất ưu đãi.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <i className="fa fa-2x fa-car text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">03</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Kiểm tra xe</h4>
                                    <p className="m-0">
                                        Kiểm tra xe  tình trạng kỹ thuật và an toàn của trước khi cho thuê xe và sử dụng
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <i className="fa fa-2x fa-cogs text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">04</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Tự động sửa chữa</h4>
                                    <p className="m-0">
                                        Tính năng tự động sửa chữa cho phép hệ thống tự phát hiện và khắc phục lỗi mà không cần sự can thiệp của con người, giúp tiết kiệm thời gian và nâng cao hiệu quả.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <i className="fa fa-2x fa-spray-can text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">05</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Sơn tự động</h4>
                                    <p className="m-0">
                                        Tính năng tự động sơn cho phép máy móc tự động thực hiện quá trình sơn, giúp tiết kiệm thời gian và đảm bảo chất lượng sơn đồng đều trên bề mặt.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <i className="fa fa-2x fa-pump-soap text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">06</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Dọn dẹp tự động</h4>
                                    <p className="m-0">Tính năng dọn dẹp tự động của hệ thống cho thuê xe tự động giúp xe luôn sạch sẽ và gọn gàng, nâng cao trải nghiệm của khách hàng mà không cần sự can thiệp của nhân viên.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="bg-banner py-5 px-4 text-center">
                            <div className="py-5">
                                <h1 className="display-1 text-uppercase text-primary mb-4">
                                    Giảm 50%
                                </h1>
                                <h1 className="text-uppercase text-light mb-4">
                                    Ưu Đãi Đặc Biệt Dành Cho Thành Viên Mới
                                </h1>
                                <p className="mb-4">Chỉ vào Chủ Nhật từ ngày 1 tháng 1 đến 30 tháng 1 năm 2045</p>
                                <a className="btn btn-primary mt-2 py-3 px-5" href="">
                                    Đăng Ký Ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner End */}


                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="fa fa-angle-double-up" />
                </a>

                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src={`${process.env.PUBLIC_URL}/assets/lib/easing/easing.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/assets/lib/waypoints/waypoints.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/assets/lib/owlcarousel/owl.carousel.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/assets/lib/tempusdominus/js/moment.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/assets/lib/tempusdominus/js/moment-timezone.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js`}></script>

                {/* Template Javascript */}
                <script src={`${process.env.PUBLIC_URL}/assets/js/main.js`}></script>
            </>

        </div>
    )

}

export default Service;