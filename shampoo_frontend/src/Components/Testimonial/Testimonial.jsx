import React, { useEffect } from 'react'

const Testimonial = () => {
    const location = window.location.pathname
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
    return (
        <>

            {/* <!-- Hero Start --> */}
            {
                location === '/testimonial' ? <div className="container-fluid bg-primary hero-header mb-5">
                    <div className="container text-center">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">Testimonial</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Feature Start --> */}
            {
                location === '/testimonial' ? <div className="container-fluid py-5">
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


            {/* <!-- Testimonial Start --> */}
            <div class="container-fluid testimonial bg-primary my-5 py-5">
                <div class="container text-white py-5">
                    <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                        <h1 class="text-white mb-3">Our Customer Said <span class="fw-light text-dark">About Our Natural Shampoo</span></h1>
                        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.1s">
                                <div class="testimonial-item text-center" data-dot="1">
                                    <img class="img-fluid border p-2" src="img/testimonial-1.jpg" alt="" />
                                    <h5 class="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                                    <h5 class="mb-1">Client Name</h5>
                                    <h6 class="fw-light text-white fst-italic mb-0">Profession</h6>
                                </div>
                                <div class="testimonial-item text-center" data-dot="2">
                                    <img class="img-fluid border p-2" src="img/testimonial-2.jpg" alt="" />
                                    <h5 class="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                                    <h5 class="mb-1">Client Name</h5>
                                    <h6 class="fw-light text-white fst-italic mb-0">Profession</h6>
                                </div>
                                <div class="testimonial-item text-center" data-dot="3">
                                    <img class="img-fluid border p-2" src="img/testimonial-3.jpg" alt="" />
                                    <h5 class="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                                    <h5 class="mb-1">Client Name</h5>
                                    <h6 class="fw-light text-white fst-italic mb-0">Profession</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}

export default Testimonial