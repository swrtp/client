import React from "react";

function  Car() {
    return(
        <div>
            <>
             {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Danh sách xe</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0">
                            <a className="text-white" href="/">
                                Trang chủ
                            </a>
                        </h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Danh sách</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Rent A Car Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
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

            </>

        </div>
    );
};

export default Car;