import React from "react";

function Testimonial() {
    return (
        <div>
            <>

                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Chứng nhận</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0">
                            <a className="text-white" href="/">
                                Trang Chủ
                            </a>
                        </h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Chứng nhận</h6>
                    </div>
                </div>

                {/* Page Header Start */}
                {/* Testimonial Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
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
                                    Hệ thống cho thuê xe tự lái mang đến trải nghiệm thuận tiện và linh hoạt, với xe chất lượng cao và thủ tục thuê nhanh gọn, giúp khách hàng dễ dàng khám phá mọi ngóc ngách của thành phố
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
                                    Dịch vụ cho thuê xe tự lái rất tiện lợi, xe luôn trong tình trạng tốt và sạch sẽ, giúp tôi có những chuyến đi thú vị mà không lo lắng về phương tiện di chuyển
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
                                    Hệ thống đặt xe dễ sử dụng, hỗ trợ trực tuyến nhanh chóng, cho phép tôi thuê xe chỉ trong vài phút, thật sự ấn tượng và hiệu quả.
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
                                    Tôi rất hài lòng với trải nghiệm thuê xe tự lái, nhân viên hỗ trợ nhiệt tình và xe luôn được bảo trì tốt, làm cho chuyến đi của tôi trở nên thoải mái và an toàn.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial End */}
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

export default Testimonial;