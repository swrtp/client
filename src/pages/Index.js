import React from "react";

function About() {
    return(
        <div>
            <>
              {/* Carousel Start */}
                <div className="container-fluid p-0" style={{ marginBottom: 90 }}>
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/*<img className="w-100" src="img/carousel-1.jpg" alt="Hình ảnh" />*/}
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/assets/img/carousel-1.jpg`} alt="Hình ảnh" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 900 }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Thuê Xe</h4>
                                        <h1 className="display-1 text-white mb-md-4">
                                            Xe Thuê Tốt Nhất Tại Vị Trí Của Bạn
                                        </h1>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                                            Đặt Ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/*<img className="w-100" src="img/carousel-2.jpg" alt="Hình ảnh" />*/}
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/assets/img/carousel-2.jpg`} alt="Hình ảnh" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 900 }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Thuê Xe</h4>
                                        <h1 className="display-1 text-white mb-md-4">
                                            Xe Chất Lượng Với Số Cây Không Giới Hạn
                                        </h1>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                                            Đặt Ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#header-carousel"
                            data-slide="prev"
                        >
                            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                <span className="carousel-control-prev-icon mb-n2" />
                            </div>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#header-carousel"
                            data-slide="next"
                        >
                            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                <span className="carousel-control-next-icon mb-n2" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Carousel End */}
                {/* About Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-1 text-primary text-center">01</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">
                            Chào Mừng Đến Với <span className="text-primary">Royal Cars</span>
                        </h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                {/*<img className="w-75 mb-4" src="img/about.png" alt="" />*/}
                                <img className="w-75 mb-4" src={`${process.env.PUBLIC_URL}/assets/img/about.png`} alt="" />
                                <p>
                                    Justo et eos et ut takimata sed sadipscing dolore lorem, et elitr
                                    labore labore voluptua no rebum sed, stet voluptua amet sed elitr ea
                                    dolor dolores no clita. Dolores diam magna clita ea eos amet, amet
                                    rebum voluptua vero vero sed clita accusam takimata. Nonumy labore
                                    ipsum sea voluptua sea eos sit justo, no ipsum sanctus sanctus no et
                                    no ipsum amet, tempor labore est labore no. Eos diam eirmod lorem ut
                                    eirmod, ipsum diam sadipscing stet dolores elitr elitr eirmod
                                    dolore. Magna elitr accusam takimata labore, et at erat eirmod
                                    consetetur tempor eirmod invidunt est, ipsum nonumy at et.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-4 mb-2">
                                <div
                                    className="d-flex align-items-center bg-light p-4 mb-4"
                                    style={{ height: 150 }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                                        style={{ width: 100, height: 100 }}
                                    >
                                        <i className="fa fa-2x fa-headset text-secondary" />
                                    </div>
                                    <h4 className="text-uppercase m-0">Hỗ Trợ Thuê Xe 24/7</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <div
                                    className="d-flex align-items-center bg-secondary p-4 mb-4"
                                    style={{ height: 150 }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                                        style={{ width: 100, height: 100 }}
                                    >
                                        <i className="fa fa-2x fa-car text-secondary" />
                                    </div>
                                    <h4 className="text-light text-uppercase m-0">
                                        Đặt Xe Bất Cứ Lúc Nào
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <div
                                    className="d-flex align-items-center bg-light p-4 mb-4"
                                    style={{ height: 150 }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                                        style={{ width: 100, height: 100 }}
                                    >
                                        <i className="fa fa-2x fa-map-marker-alt text-secondary" />
                                    </div>
                                    <h4 className="text-uppercase m-0">Nhiều Địa Điểm Đón Xe</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About End */}
                {/* Services Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-1 text-primary text-center">02</h1>
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
                                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                        stet, justo elitr dolor amet sit sea sed
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
                                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                        stet, justo elitr dolor amet sit sea sed
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
                                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                        stet, justo elitr dolor amet sit sea sed
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
                                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                        stet, justo elitr dolor amet sit sea sed
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
                                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                        stet, justo elitr dolor amet sit sea sed
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
                                    <h4 className="text-uppercase mb-3">Dọn xe tự động</h4>
                                    <p className="m-0">
                                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                        stet, justo elitr dolor amet sit sea sed
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
                                    Giảm Giá 50%
                                </h1>
                                <h1 className="text-uppercase text-light mb-4">
                                    Ưu Đãi Đặc Biệt Dành Cho Thành Viên Mới
                                </h1>
                                <p className="mb-4">Chỉ vào Chủ Nhật từ 1 tháng 1 đến 30 tháng 1 năm 2045</p>
                                <a className="btn btn-primary mt-2 py-3 px-5" href="">
                                    Đăng Ký Ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner End */}
                {/* Rent A Car Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-1 text-primary text-center">03</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">
                            Tìm xe
                        </h1>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src={`${process.env.PUBLIC_URL}/assets/img/car-rent-1.png`} alt="" />

                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>Tự đông</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href="">
                                        1000000/Ngày
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item active mb-4">

                                    <img className="img-fluid mb-4" src={`${process.env.PUBLIC_URL}/assets/img/car-rent-2.png`} alt="" />

                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>Tự đông</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href="">
                                        1000000/Ngày
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src={`${process.env.PUBLIC_URL}/assets/img/car-rent-3.png`} alt="" />

                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>Tự động</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href="">
                                        1000000/Ngày
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src={`${process.env.PUBLIC_URL}/assets/img/car-rent-4.png`} alt="" />

                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>Tự động</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href="">
                                        1000000/Ngày
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src={`${process.env.PUBLIC_URL}/assets/img/car-rent-5.png`} alt="" />

                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>Tự động</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href="">
                                        1,000,000/Ngày
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src={`${process.env.PUBLIC_URL}/assets/img/car-rent-6.png`} alt="" />
                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>Tự động</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href="">
                                        1,000,000/Ngày
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Rent A Car End */}
                {/* Team Start */}

                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <h1 className="display-1 text-primary text-center">04</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">
                            Đến với nhóm chúng tôi
                        </h1>
                        <div
                            className="owl-carousel team-carousel position-relative"
                            style={{ padding: "0 30px" }}
                        >
                            <div className="team-item">
                                <img className="img-fluid w-100" src={`${process.env.PUBLIC_URL}/assets/img/team-1.jpg`} alt="" />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Họ và tên</h4>
                                    <p className="m-0">Chỉ định</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <img className="img-fluid w-100" src={`${process.env.PUBLIC_URL}/assets/img/team-2.jpg`} alt="" />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Họ và tên</h4>
                                    <p className="m-0">Chỉ định</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <img className="img-fluid w-100" src={`${process.env.PUBLIC_URL}/assets/img/team-3.jpg`} alt="" />

                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Họ và tên</h4>
                                    <p className="m-0">Chỉ định</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <img className="img-fluid w-100" src={`${process.env.PUBLIC_URL}/assets/img/team-4.jpg`} alt="" />
                                <div className="position-relative py-4">
                                    <h4 className="text-uppercase">Họ và tên</h4>
                                    <p className="m-0">Chỉ định</p>
                                    <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mx-0">
                            <div className="col-lg-6 px-0">
                                <div
                                    className="px-5 bg-secondary d-flex align-items-center justify-content-between"
                                    style={{ height: 350 }}
                                >
                                    <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                                         src={`${process.env.PUBLIC_URL}/assets/img/banner-left.png`}
                                         alt="" />

                                    <div className="text-right">
                                        <h3 className="text-uppercase text-light mb-3">
                                            Bạn muốn trở thành tài xế?
                                        </h3>
                                        <p className="mb-4">
                                            Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                                        </p>
                                        <a className="btn btn-primary py-2 px-4" href="">
                                            Bắt đầu ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 px-0">
                                <div
                                    className="px-5 bg-dark d-flex align-items-center justify-content-between"
                                    style={{ height: 350 }}
                                >
                                    <div className="text-left">
                                        <h3 className="text-uppercase text-light mb-3">
                                            Bạn đang tìm kiếm một chiếc xe?
                                        </h3>
                                        <p className="mb-4">
                                            Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                                        </p>
                                        <a className="btn btn-primary py-2 px-4" href="">
                                            Bắt đầu ngay
                                        </a>
                                    </div>
                                    <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                                         src={`${process.env.PUBLIC_URL}/assets/img/banner-right.png`}
                                         alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Testimonial Start */}

                <div className="container-fluid py-5">
                    <div className="container py-5">

                        <h1 className="display-1 text-primary text-center">05</h1>
                        <h1 className="display-4 text-uppercase text-center mb-5">
                            Khách Hàng Nói Gì về chúng tôi
                        </h1>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4"
                                         src={`${process.env.PUBLIC_URL}/assets/img/testimonial-1.jpg`}
                                         alt=""
                                    />

                                    <h1 className="display-2 text-white m-0 fa fa-quote-right"/>
                                </div>
                                <h4 className="text-uppercase mb-2">Tên Khách Hàng</h4>
                                <i className="mb-2">Nghề Nghiệp</i>
                                <p className="m-0">
                                    Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                    stet, justo elitr dolor amet sit sea sed
                                </p>
                            </div>
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4"
                                         src={`${process.env.PUBLIC_URL}/assets/img/testimonial-2.jpg`}
                                         alt=""
                                    />
                                    <h1 className="display-2 text-white m-0 fa fa-quote-right"/>
                                </div>
                                <h4 className="text-uppercase mb-2">Tên Khách Hàng</h4>
                                <i className="mb-2">Nghề Nghiệp</i>
                                <p className="m-0">
                                    Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                    stet, justo elitr dolor amet sit sea sed
                                </p>
                            </div>
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4"
                                         src={`${process.env.PUBLIC_URL}/assets/img/testimonial-3.jpg`}
                                         alt=""
                                    />
                                    <h1 className="display-2 text-white m-0 fa fa-quote-right"/>
                                </div>
                                <h4 className="text-uppercase mb-2">Tên Khách Hàng</h4>
                                <i className="mb-2">Nghề Nghiệp</i>
                                <p className="m-0">
                                    Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                    stet, justo elitr dolor amet sit sea sed
                                </p>
                            </div>
                            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <img className="img-fluid ml-n4"
                                         src={`${process.env.PUBLIC_URL}/assets/img/testimonial-4.jpg`}
                                         alt=""
                                    />
                                    <h1 className="display-2 text-white m-0 fa fa-quote-right"/>
                                </div>
                                <h4 className="text-uppercase mb-2">Tên Khách Hàng</h4>
                                <i className="mb-2">Nghề Nghiệp</i>
                                <p className="m-0">
                                    Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
                                    stet, justo elitr dolor amet sit sea sed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Liên hệ với chúng tôi</h1>
                        <div className="row">
                            <div className="col-lg-7 mb-2">
                                <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                    <form>
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <input
                                                    type="text"
                                                    className="form-control p-4"
                                                    placeholder="Tên"
                                                    required="required"
                                                />
                                            </div>
                                            <div className="col-6 form-group">
                                                <input
                                                    type="email"
                                                    className="form-control p-4"
                                                    placeholder="Email"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Chủ đề"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                <textarea
                    className="form-control py-3 px-4"
                    rows={5}
                    placeholder="Tin nhắn"
                    required="required"
                    defaultValue={""}
                />
                                        </div>
                                        <div>
                                            <button className="btn btn-primary py-3 px-5" type="submit">
                                                Gửi tin nhắn
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-2">
                                <div
                                    className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4"
                                    style={{ height: 435 }}
                                >
                                    <div className="d-flex mb-3">
                                        <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Văn Phòng Chính</h5>
                                            <p>123 Đường, New York, USA</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Văn Phòng Chi Nhánh</h5>
                                            <p>123 Đường, New York, USA</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Dịch Vụ Khách Hàng</h5>
                                            <p>customer@example.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                                        <div className="mt-n1">
                                            <h5 className="text-light">Trả Hàng &amp; Hoàn Tiền</h5>
                                            <p className="m-0">refund@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Contact End */}

            </>



        </div>
    )

}

export default About;