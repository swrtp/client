import React from "react";

function Contact() {
    return(
        <div>
            <>

                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Liên hệ</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0">
                            <a className="text-white" href="/">
                                Trang chủ
                            </a>
                        </h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Liên hệ</h6>
                    </div>
                </div>
                {/* Page Header Start */}
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

export default Contact;