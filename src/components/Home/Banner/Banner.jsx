import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/new.webp";
import { scrollToSection } from "../../../utils/scrollSection";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Revolutionize</h1>
                    <p>
                        
                        Experience the future of tech today with eSmart's cutting
                        edge selection of smart devices
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={() => scrollToSection("about") }>Read More</div>
                        <div className="banner-cta v2" onClick={() => scrollToSection("product") }>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;