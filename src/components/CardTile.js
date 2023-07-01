import { useState } from "react";
import "../styles/Card.scss";

export default function CardTile({ value }) {
    const [card, setCard] = useState(true);

    function handleClick() {
        setCard(!card)
    }

    return (
        <div onClick={handleClick} className="card m-1 w-100">
            {card ?

                <>
                    <div className="click">
                        <div className="text-center">Kattints ide!</div>
                    </div>

                    <img src={value.image} alt={value.text} title={value.text} className="card-img" />

                </> :
                <div className="card-text">

                    <div className="card-body mb-1 p-2 w-100 flex">
                        <h5>{value.text}</h5>
                    </div>
                </div>

            }


        </div>
    )

}