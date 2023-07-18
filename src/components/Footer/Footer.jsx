import React from "react";
import "./Footer.scss";
import {FaMobileAlt,FaEnvelope} from "react-icons/fa";
const Footer = () => {
    return <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="c-item">It's a ecommerce website student learning project it is only a prototype and has no backend support build using html,scss,javascript,react</div>
                </div>

                <div className="col">
                    <div className="title">Contact Us</div>
                    <div className="c-item">
                        <FaMobileAlt />
                        mobile : --------
                        </div>
                        <div className="c-item">
                        <FaEnvelope />
                         email : -------
                         </div>
                </div>
                <div className="col">
                    <div className="title">Categeories</div>
                    <div className="c-item k">Headphones </div>
                    <div className="c-item k"> Smartwatches </div>
                    <div className="c-item k "> Blutooth speakers </div>
                    <div className="c-item k"> Wireless Earbuds </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                     E-COMMERCE WEBSITE PROTOTYPE FOR PROJECT SUBMISSION 
                    THIS IS FOR LEARNING PURPOSE AND DOESNOT IMPLICATE A REAL WORLD PROBLEM
                </div>
            </div>
    </footer>;
};

export default Footer;
