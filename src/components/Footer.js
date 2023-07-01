import "../styles/Footer.scss"

const config=require("../../package.json");

export default function Footer (props){
    return(
        <div className="footer row flex">
            <div className="col-12 text-center">
            <p>Minden jog fenntartva &copy; {config.year} </p>
                <p>Készítő: {config.creator} </p>
            </div>
        </div>
    )
}