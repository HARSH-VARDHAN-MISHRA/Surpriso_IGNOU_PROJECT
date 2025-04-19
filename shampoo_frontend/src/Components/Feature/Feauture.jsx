import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'
const Feauture = () => {
    const location = window.location.pathname
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            {/* <!-- Hero Start --> */}
            {
                location === '/feature' ? <div class="container-fluid bg-primary hero-header mb-5">
                    <div class="container text-center">
                        <h1 class="display-4 text-white mb-3 animated slideInDown">Features</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Features</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Feature Start --> */}
            {
                location === '/feature' ? <div class="container-fluid py-5">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-gift fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">Unique & Personalized</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-shipping-fast fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">Fast & Reliable Delivery</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-heart fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">Perfect for Every Occasion</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> : null
            }
            {/* <!-- Feature End --> */}


            {/* <!-- Feature Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="text-primary mb-3"><span className="fw-light text-dark">Why Choose</span> Surprizo Gifts?</h1>
                        <p className="mb-5">
                            At **Surprizo**, we bring you handpicked gifts that spread joy and create unforgettable moments.
                            Our thoughtfully curated selection ensures there's something special for every occasion.
                        </p>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="row g-5">
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-gift fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Unique & Thoughtful</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Find carefully selected gifts that express love and appreciation.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-smile fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Personalized Touch</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Make it extra special with custom messages and engraving options.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-truck fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Fast & Reliable Delivery</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Ensure timely surprises with our quick and hassle-free shipping.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid animated pulse infinite w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vvVsbE_mEuqcfNbbnm9iFLdlpIyNCAnpMZiUP4B1gG3fzfCBp6eTFbHwXh9AKDQ9fbw&usqp=CAU" alt="Surprizo Gifts" />
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="row g-5">
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-star fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Premium Quality</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Only the finest gifts, crafted with care and excellence.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-heart fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>For Every Occasion</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>From birthdays to weddings, find the perfect present for any event.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-thumbs-up fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Satisfaction Guaranteed</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>We ensure every gift brings happiness, backed by excellent customer service.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Feature End --> */}

            {
                location === '/feature' ? <Newsletter /> : null
            }
        </>
    )
}

export default Feauture