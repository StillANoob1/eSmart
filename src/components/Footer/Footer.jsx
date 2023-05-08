import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                      At eSmart, we are revolutionizing the tech industry with our cutting edge selection of 
                      smart devices and audio gear. Upgrade your digital lifestyle with the latest and most
                      innovative products on the market.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            shalimar garden , Ghaziabad - 201005
                            Uttar Pardesh
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9555701624</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: anas241124@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        eSmart 2023 CREATED BY Anas Khan
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;