/* eslint-disable no-unused-vars */
import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Welcome to Soul Stack, where cutting-edge technology meets immersive audio experiences. As a premier online destination for Bluetooth speakers, earbuds, and smartwatches, we are dedicated to enhancing your lifestyle with seamlessly integrated devices.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                         Noida ,Delhi NCR 
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone : +91 - 8493501485
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email : soulstack@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">
                    Category
                </div>
                <div className="text" onClick={() => navigate("/category/3")}>
                    Wireless Earbuds
                </div>
                <div className="text" onClick={() => navigate("/category/4")}>
                    Bluetooth Speakers
                </div>
                <div className="text" onClick={() => navigate("/category/2")}>
                   Smart Watches
                </div>
                <div className="text" onClick={() => navigate("/category/1")}>
                    Headphones
                </div>
            </div>
            <div className="col">
                <div className="pages">
                    Pages
                </div>
                <div className="text" onClick={() => navigate("/")}> 
                    Home
                </div><div className="text">
                    About
                </div><div className="text">
                    Terms & Conditions
                </div><div className="text">
                    Contact
                </div><div className="text">
                    Privacy Policy
                </div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
             <b>SOUL STACK</b> FOUNDED BY & Website created by <b>Sarthak Tiwari</b>.
              </div>
                 <img src={Payment} alt=""/>
            </div>
        </div>

    </footer>
};

export default Footer;
