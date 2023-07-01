import { useState } from "react"
import "../styles/Events.scss"
import Calendar from "../components/Calendar"
import CustomMotion from "../components/CustomMotion";
import {events} from "../datasources/EventsDatas"



const options = [
    {
        label: "Dátum szerint csökkenő",
        value: "DateDesc"
    },
    {
        label: "Dátum szerint növekvő",
        value: "DateAsc"
    }
]

export default function Events(props) {


    const [select, setSelect] = useState(options[0].value)

    const dateDesc = [...events].sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
    })

    const dateAsc = [...events].sort(function (a, b) {
        return new Date(a.date) - new Date(b.date)
    })
    const [sort, setSort] = useState(dateDesc);

    function handleChange(event) {
        setSelect(event.target.value)

        if (event.target.value === "DateDesc") {
            setSort(dateDesc)
        }

        if (event.target.value === "DateAsc") {
            setSort(dateAsc)
        }
    }


    return (
            <CustomMotion className="events flex">
                <h1 className="mt-1 mb-1 text-center">Események</h1>
                <div className="row">
                    <div className="select ml-2">
                        <select defaultValue={select} onChange={handleChange}>
                            {options.map((map, index) => {
                                return (
                                    <option key={index} value={map.value}>{map.label}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="container col-12 col-lg-9 mb-1 flex">

                        {sort.map((map, index) => {
                            return (
                                <div key={index} className="card mt-1 p-1 text-center">
                                    <h2>{map.title}</h2>
                                    <span className="card-date mb-1">{map.date}</span><span>Szerző: {map.author}</span>
                                    <div className="card-text mt-1 w-100">
                                        <p > {map.para1}</p>
                                        <p>{map.para2}</p>
                                        <a href={map.href}>{map.link}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="calendar col-lg-3 mb-1 flex">
                        <Calendar />
                    </div>
                </div>

            </CustomMotion>
        
    )
}