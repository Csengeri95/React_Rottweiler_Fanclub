import Card from "../components/Card"
import Carousel from "../components/Carousel"
import "../styles/Home.scss"
import { Link } from "react-router-dom";
import CustomMotion from "../components/CustomMotion";


export default function Home(props) {


    return (
        
            <CustomMotion className="home">
                <div className="row">

                    <div className="box">

                        <div className="introduction col-12 col-xl-4 mt-1 flex " >
                            <div className="introduction-body p-1" >
                                <h1 className="text-center mb-1">Üdvözlöm a Rottweiler rajongói klub oldalán!</h1>
                                <p>A weboldal 2022-ben jött létre, azzal az indokkal, hogy népszerűsítse eme rendkívül karakteres kutyafajtát.</p>
                                <p>A lap legnagyobb célkitúzése, hogy az emberek fejében létező téveszméket száműzzük és ezen karakteres kutyafajtának a valódi arcát megmutassuk. Az oldalon megannyi érdekességet és információt talál a <Link to="/introduce">Bemutatás</Link> menüpontban, illetve fel is veheti velünk a <Link to="/contact">Kapcsolat</Link>-ot ! </p>

                            </div>

                        </div>

                        <div className="col-12 col-xl-8 flex p-1">
                            <Carousel />
                        </div>

                    </div>
                    <div className="col-12 mt-1 mb-2 text-center">
                        <h2>Tulajdonságok</h2>
                        <Card />
                    </div>



                </div>
            </CustomMotion>
    )
}