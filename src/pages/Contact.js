import "../styles/Contact.scss"
import { useState } from "react";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { BsFillPersonFill, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import CustomMotion from "../components/CustomMotion";



export default function Contact(props) {
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [textArea, setTextArea] = useState("")


    function handleForm(event) {
        event.preventDefault();


        if (name.length === 0 || email.length === 0 || phone.length === 0 || textArea.length === 0) {
            setError(true)
        }

        




        if (name.length !== 0 && email.length !== 0 && phone.length !== 0 && textArea.length !== 0) {
            setMessage(true)
            event.target.reset()

            setTimeout(() => {
                setMessage(false);
                window.location.reload();
            }, 8000);
        }
    }



    return (
        <CustomMotion className="contact text-center">
            <div className="row">
                <h1 className="mt-1">Kapcsolat</h1>

                <div className="form-container col-12 mt-1 flex text-center">

                    <form method="post" className="flex mt-1 mb-1 pt-1 text-center" onSubmit={handleForm}>
                        <h3 className="mb-2">Küldjön üzenetet nekünk az alábbi űrlap kitöltésével!</h3>

                        {message ? <div className="success mb-1"> <span><AiOutlineCheckCircle className="mr-1" /></span>Az üzenetét megkaptuk, rövidesen válaszolunk Önnek! <BsEmojiSmile /></div> : ""}

                        <label>< BsFillPersonFill className="mr-1" />Név</label>
                        <input onChange={e => setName(e.target.value)} className="mb-1 text-center" type="text" name="name" autoComplete="off" placeholder="Gipsz Jakab" />


                        {error && name.length <= 0 ? <p className="error mb-1" >Kérem adja meg a nevét!</p> : ""}

                        <label> <FaMailBulk className="mr-1" />Email-cím</label>
                        <input onChange={e => setEmail(e.target.value)} className="mb-1 text-center" type="email" name="email" autoComplete="off" placeholder="valaki@gmail.com" />

                        {error && email.length <= 0 ? <p className="error mb-1" >Kérem adja meg az email-címét</p> : ""}



                        <label> <FaPhoneAlt className="mr-1" />Telefonszám</label>
                        <input onChange={e => setPhone(e.target.value)} className="mb-1 text-center" type="tel" name="phone" autoComplete="off" placeholder="+36-10-123-4567" />

                        {error && phone.length <= 0 ? <p className="error mb-1">Kérem adja meg a telefonszámát!</p> : ""}

                        


                        <textarea onChange={e => setTextArea(e.target.value)} name="textarea" rows={8} cols={30} placeholder="Ide írja az üzenetét..." style={{ resize: "none" }}>
                        </textarea>
                        {error && textArea.length <= 0 ? <p className="error mb-1" style={{ color: "red" }}>Kérem írjon üzenetet!</p> : ""}

                        <button className="mt-1 mb-1" >Küldés</button>
                    </form>

                </div>

            </div>

        </CustomMotion>
    )
}