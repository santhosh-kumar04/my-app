import {MdClose} from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Product Name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-button">
                        <span>-</span>
                        <span>2</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>2</span>
                        <span>x</span>
                        <span className="highlight">1200</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
