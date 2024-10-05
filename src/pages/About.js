import React from "react";

function About() {
    return (
        <div>
            <>

                {/* Search End */}
                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Về chúng tôi</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0">
                            <a className="text-white" href="/">
                                Trang chủ
                            </a>
                        </h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Về chúng tôi</h6>
                    </div>
                </div>
                {/* Page Header End */}
                {/* About Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">
                            Chào mừng đến với <span className="text-primary">Royal Cars</span>
                        </h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <img className="w-75 mb-4" src={`${process.env.PUBLIC_URL}/assets/img/about.png`} alt="" />

                                <p>
                                    Chỉ và eos và ut takimata sed sadipscing dolore lorem, et elitr
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
                                    <h4 className="text-uppercase m-0">Hỗ trợ thuê xe 24/7</h4>
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
                                        Đặt xe bất cứ lúc nào
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
                                    <h4 className="text-uppercase m-0">Nhiều địa điểm đón xe</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mx-0">
                            <div className="col-lg-6 px-0">
                                <div
                                    className="px-5 bg-secondary d-flex align-items-center justify-content-between"
                                    style={{ height: 350 }}
                                >
                                    <img
                                   className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                                   src={`${process.env.PUBLIC_URL}/assets/img/banner-left.png`}
                                   alt=""
                                    />


                                    <div className="text-right">
                                        <h3 className="text-uppercase text-light mb-3">
                                            Muốn trở thành tài xế?
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
                                            Tìm kiếm một chiếc xe?
                                        </h3>
                                        <p className="mb-4">
                                            Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                                        </p>
                                        <a className="btn btn-primary py-2 px-4" href="">
                                            Bắt đầu ngay
                                        </a>
                                    </div>
                                    <img
                                        className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4"
                                        src="img/banner-right.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}


                {/* JavaScript Libraries */}

                <script src="https://code.jquery.com/jquery-3.4.1.min.js"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"/>
                <script src="assets/lib/easing/easing.min.js"/>
                <script src="assets/lib/waypoints/waypoints.min.js"/>
                <script src="assets/lib/owlcarousel/owl.carousel.min.js"/>
                <script src="assets/lib/tempusdominus/js/moment.min.js"/>
                <script src="assets/lib/tempusdominus/js/moment-timezone.min.js"/>
                <script src="assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"/>

                {/* Template Javascript */}
                <script src="assets/js/main.js"></script>

            </>

        </div>
    );
}

export default About;
