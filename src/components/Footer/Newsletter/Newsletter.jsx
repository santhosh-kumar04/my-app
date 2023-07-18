import "./Newsletter.scss";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
}from "react-icons/fa";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for updates</span>
            <div className="form">
                <input className="nyt"type="text"placeholder="enter email" />
                <button className="mmn">Subscribe</button>
            </div>
            <div className="text">Terms and Conditions & privacy policy applicable </div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14} />
                </div>
                <div className="icon">
                    <FaTwitter size={14} />
                </div>
            </div>
        </div>
        </div>;
};

export default Newsletter;
