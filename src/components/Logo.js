import Image from "../images/Logo/logo-remove.png";
import {Link} from "react-router-dom";
import "../styles/Logo.scss"

export default function Logo (props){



    
    return(
        <div className="logo">
          <Link to="/">  <img src={Image} alt="Logo" title="Logo" /> </Link>
        </div>
    )
}