import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
    return <div className="product-card">
                <div className="thumbnail">
                    <img src={prod} alt="" />
                </div>
                    <div className="product-details">
                        <span className="name">Ear Pods</span>
                        <span className="price">&#8377;499</span>
                        
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button ">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                
        </div>;
    
};


export default Product;
