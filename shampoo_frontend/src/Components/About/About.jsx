import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import { Link } from 'react-router-dom'
import image from '../../Images/1-removebg-preview.png'

const About = () => {
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
                location === '/about' ? <div class="container-fluid bg-primary hero-header mb-5">
                    <div class="container text-center">
                        <h1 class="display-4 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}
            {/* <!-- About Start --> */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-5 my-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid animated pulse infinite" src="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Best+Flower+Shop/How-to-Choose-the-Best-Flower-Shop-Delivery-Service-Near-You--Blog-Cover-D.jpg" alt="Surprizo Gifts" />
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="text-primary text-start mb-4">Gifts That <span className="fw-light text-dark">Make Every Moment Special</span></h1>
                            <p className="mb-4">
                                At **Surprizo**, we believe that every gift holds the power to bring joy, create memories, and strengthen bonds.
                                Whether it's a birthday, anniversary, or a special celebration, the perfect gift can make all the difference.
                            </p>
                            <p className="mb-4">
                                Our handpicked collection offers unique and thoughtful presents for every occasion, ensuring your loved ones feel cherished and appreciated.
                            </p>
                            <p className="mb-4">
                                Explore our wide range of gifts and make every moment unforgettable with **Surprizo**. Because the best gifts are the ones given with love!
                            </p>
                            <Link className="btn btn-primary py-2 px-4" to="/product">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
            {location === '/about' ? <Newsletter /> : null}
        </>
    )
}

export default About