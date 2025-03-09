import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [banner, setBanner] = useState([]);
  const token = sessionStorage.getItem("token");

  // console.log("Token in frontend:", token); // Debugging token

  const getBanner = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/banner", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      // console.log("Banner Response:", res);
      setBanner(res.data.data);
    } catch (error) {
      console.log("Error fetching banners:", error);
    }
  };

  useEffect(() => {
    getBanner();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {banner.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {banner.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={item.bannerImage} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
