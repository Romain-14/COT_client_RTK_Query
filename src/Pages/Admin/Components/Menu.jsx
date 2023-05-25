import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu({setType}) {
    const [toggleTea, setToggleTea] = useState(false);
    const [toggleCategory, setToggleCategory] = useState(false);
    const [togglePackaging, setTogglePackaging] = useState(false);

    return (
        <nav id="admin-nav">
            <Link to={"/admin"}>admin</Link>


            <div className="main-btn-ctn">
                <a className="btn main-btn" onClick={() => setToggleTea(!toggleTea)}>thé</a>
                {toggleTea && (
                    <div className="sub-btn-ctn">
                        <a className="btn sub-btn" onClick={()=> setType("listTea")}>liste</a>
                        <a className="btn sub-btn" onClick={()=> setType("addTea")}>ajouter</a>
                    </div>
                
            )}
            </div>

            <button className="btn main-btn" onClick={() => setToggleCategory(!toggleCategory)}>
                catégorie
            </button>
            {toggleCategory && (
                <div>
                    <button className="btn sub-btn" onClick={()=> setType("listCategory")}>liste</button>
                    <button className="btn sub-btn">ajouter</button>
                </div>
                
            )}

            <button className="btn main-btn" onClick={() => setTogglePackaging(!togglePackaging)}>
                conditionnement
            </button>
            {togglePackaging && (
                <div>
                    <button className="btn sub-btn">liste</button>
                    <button className="btn sub-btn">ajouter</button>
                </div>
                
            )}
        </nav>
    );
}

export default Menu;
