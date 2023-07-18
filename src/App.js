import { BrowserRouter , Routes , Route, renderMatches } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
    return(
        // <BrowserRouter>
        <AppContext>
        <Header />
        <Home />
            {/* <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/categeory:id" element={<Category/>} />
                <Route path="/product:id" element={<SingleProduct />} />
                
            </Routes> */}
            <Newsletter />
            <Footer />
        </AppContext>
        // </BrowserRouter>
    );
}

export default App;