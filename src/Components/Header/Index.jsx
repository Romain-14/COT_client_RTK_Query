import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/autres/logo.png";
import style from "./header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <header>
            <small>Livraison offerte à partir de 65€ d'achat !</small>
            <Link to={"/cart"} className={style.banCart}>
                <FontAwesomeIcon icon={faCartShopping} className={style.cartIcon} />
                <span>42€</span>
            </Link>
            <Link to={"/"} title="retour à la page d'accueil">
                <h1>
                    <img src={logo} alt="" />
                </h1>
            </Link>

            <nav>
                {/* <NavLink to={"/tea"}>thés</NavLink> */}
                <NavLink to={"/about#24"}>notre histoire</NavLink>
                <NavLink to={"/admin"}>AP</NavLink>
            </nav>
        </header>
    );
}

export default Header;
