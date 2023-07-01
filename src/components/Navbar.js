import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {NavbarContext} from "../contexts/NavbarContext";
import "../styles/Navbar.scss"
import Hamburger from "./Hamburger"
import Logo from "./Logo";


export default function Navbar({ pages }) {

    
    const {navbar,setNavbar}=useContext(NavbarContext)
    const location = useLocation();

    return (
        
        <div className="header">
            <div className="row">
                <nav className="navbar col-12 flex">
                    <div className="ml-2"><Logo/></div>
                    <ul className={navbar ? "navbar-mobile flex text-center" : "navbar-links flex"}>
                        {pages.map((map, index) => {
                            let classes = "";

                            if (location.pathname === map.path) {
                                classes += "active"
                            }

                            return (
                                <Link to={map.path} key={index} className={classes} onClick={() => setNavbar(false)}  >  <li>{map.name}</li> </Link>
                            )
                        })}
                    </ul>
                    <Hamburger className="flex pr-1"  onClick={()=>setNavbar(!navbar)}  />
                </nav>
            </div>
        </div>
    )
}