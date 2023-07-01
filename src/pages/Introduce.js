import "../styles/Introduce.scss";
import { data } from "../datasources/IntroduceDatas"
import CustomMotion from "../components/CustomMotion";


export default function Introduce(props) {
    return (
        
            <CustomMotion className="introduce text-center">
                <h1 className="mt-1" >A rottweiler kutya bemutatása</h1>
                <div className="row">
                    <div className="container col-12 mt-1 flex text-center">


                        {data.map((map, index) => {
                            return (
                                <div key={index} className="card  mt-1 mb-1 flex">

                                    <img src={map.img} alt={map.title} title={map.title} />

                                    <div className="card-body" >
                                        <h4>{map.title}</h4>
                                        <p>{map.para1}</p>
                                        <p>{map.para2}</p>
                                        <p>{map.para3}</p>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </CustomMotion>
        
    )

}