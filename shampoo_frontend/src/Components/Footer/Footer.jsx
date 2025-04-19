import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-white footer">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <a href="index.html" className="d-inline-block mb-3">
                                <h1 className="text-primary">Surpriso</h1>
                            </a>
                            <p className="mb-0">
                                Welcome to Surprizo! Your one-stop destination for unique and thoughtful gifts. Explore our curated collection of personalized gifts, hampers, and surprises for every occasion. Make every moment special with Surprizo!
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <h5 className="mb-4">Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>A-123 Delhi</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+9876543210</p>
                            <p><i className="fa fa-envelope me-3"></i>info@surpriso.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                       
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <h5 className="mb-4">Popular Link</h5>
                            <Link className="btn btn-link" to="/about">About Us</Link>
                            <Link className="btn btn-link" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="container wow fadeIn" data-wow-delay="0.1s">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Surpriso</a>, All Right Reserved.
                                
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link to="/">Home</Link>
                                    <Link to="/cookies">Cookies</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}
export default Footer
