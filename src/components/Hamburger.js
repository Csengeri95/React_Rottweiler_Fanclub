import { useContext } from "react"
import { NavbarContext } from "../contexts/NavbarContext";
import "../styles/Hamburger.scss"


export default function Hamburger({ onClick }) {

    const { navbar } = useContext(NavbarContext)

    return (
        <div className="hamburger" onClick={onClick} >
            <div className={navbar ? "rotate-first" : ""}></div>
            <div className={navbar ? "opacity" : ""}></div>
            <div className={navbar ? "rotate-second" : ""}></div>
        </div>
    )
}