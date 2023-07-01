import "../styles/Card.scss";
import CardTile from "./CardTile";
import { images } from "../datasources/HomeCards"



export default function Card(props) {

    return (
        <div className="card-container col-12 flex" >
            {images.map((map, index) => {
                return < CardTile key={index} value={map} />


            })}
        </div>
    )
}