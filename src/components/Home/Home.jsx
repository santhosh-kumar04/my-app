import "./Home.scss";
import Banner from "./Banner/Banner";
import Categeory from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
    return <div className="home">
        <Banner></Banner>
        <div className="main-content">
            <div className="layout">
               <Categeory></Categeory>
               <Products />
            </div>
        </div>
    </div>;
};

export default Home;
