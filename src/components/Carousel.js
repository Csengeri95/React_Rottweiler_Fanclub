import { useEffect, useState } from "react";
import "../styles/Carousel.scss";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import {images} from "../datasources/CarouselImages"


export default function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function handlePrev() {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }

    function handleNext() {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    useEffect(() => {
        let intervalHandler = setInterval(setAutomatically, 5000);
        return () => {
            clearInterval(intervalHandler);
        }
    })

    function setAutomatically() {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0)
        }
    }

    const { para, img } = images[currentIndex]
    return (
        <div className="carousel flex">
            <div className="img" title={para} style={{ backgroundImage: `url(${img})` }}>

            </div>

            <div className="carousel-caption text-center">
                <h3>{para}</h3>
            </div>

            <button className="carousel-prev flex" onClick={handlePrev}>< BiChevronsLeft /></button>
            <button className="carousel-next flex" onClick={handleNext}><BiChevronsRight /></button>
        </div>
    )
}