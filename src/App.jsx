import React from "react";
import Header from "./Components/Header/Index";
import Footer from "./Components/Footer/Index";
import { Routes, Route, useLocation } from "react-router-dom";
import HOC from "./Components/HOC/GetData";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Admin from "./Pages/Admin/Index";
import Tea from "./Pages/Admin/Tea";
import Category from "./Pages/Admin/Category";
import Packaging from "./Pages/Admin/Packaging";

function App() {
    const location = useLocation();
    console.log(location);
    if (location.pathname.includes("/admin")) {
        return (
            <Routes>
                <Route path="/admin" element={<HOC child={Admin} />} >
                {/* <Route path="tea" element={<Tea />} />
                <Route path="category" element={<Category />} />
                <Route path="packaging" element={<Packaging />} /> */}
                </Route>
            </Routes>
        );
    } else {
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<HOC child={Home} />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default App;
