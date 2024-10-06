import React from "react";



function Header() {
    const items = [
        { name: 'Car Listing', link: '/car' },
        { name: 'Car Detail', link: '/detail' },
        { name: 'Car Booking', link: '/booking' },
    ];

    // Giả sử bạn có một điều kiện để lọc
    const filteredItems = items.filter(item => item.name.includes('Car'));
    return (
        <>
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
                               <a href="/" className="nav-item nav-link">
                                   Trang chủ
                               </a>
                               <a href="/about" className="nav-item nav-link active">
                                   Về chúng tôi
                               </a>
                               <a href="/service" className="nav-item nav-link">
                                   DỊch vụ
                               </a>
                               <div className="nav-item dropdown">
                                   <a
                                       href="#"
                                       className="nav-link dropdown-toggle"
                                       data-toggle="dropdown"
                                   >
                                       Xe
                                   </a>
                                   <div className="dropdown-menu rounded-0 m-0">
                                       <a href="/car" className="dropdown-item">
                                           Danh sách xe
                                       </a>
                                       <a href="/detail" className="dropdown-item">
                                           Chi tiết xe
                                       </a>
                                       <a href="/booking" className="dropdown-item">
                                           Đặt xe
                                       </a>
                                   </div>
                               </div>

                               <div className="nav-item dropdown">
                                   <a
                                       href="#"
                                       className="nav-link dropdown-toggle"
                                       data-toggle="dropdown"
                                   >
                                       Khác
                                   </a>
                                   <div className="dropdown-menu rounded-0 m-0">
                                       <a href="/team" className="dropdown-item">
                                           Đội ngũ
                                       </a>
                                       <a href="/testimonial" className="dropdown-item">
                                           CHứng nhận
                                       </a>
                                   </div>
                               </div>
                               <a href="/contact" className="nav-item nav-link">
                                   Liên hệ
                               </a>
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
                           <option selected="">Địa Điểm Nhận</option>
                           <option value={1}>Địa Điểm 1</option>
                           <option value={2}>Địa Điểm 2</option>
                           <option value={3}>Địa Điểm 3</option>
                       </select>
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
                       <div className="date mb-3" id="date" data-target-input="nearest">
                           <input
                               type="text"
                               className="form-control p-4 datetimepicker-input"
                               placeholder="Ngày Nhận"
                               data-target="#date"
                               data-toggle="datetimepicker"
                           />
                       </div>
                   </div>
                   <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                       <div className="time mb-3" id="time" data-target-input="nearest">
                           <input
                               type="text"
                               className="form-control p-4 datetimepicker-input"
                               placeholder="Giờ Nhận"
                               data-target="#time"
                               data-toggle="datetimepicker"
                           />
                       </div>
                   </div>
                   <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                       <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
                           <option selected="">Chọn Xe</option>
                           <option value={1}>Xe 1</option>
                           <option value={2}>Xe 2</option>
                           <option value={3}>Xe 3</option>
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

           {/* Search End */}
       </div>

    {/* JavaScript Libraries */}
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

)
}

export default Header