import React, { useState } from "react";
import "./contact.css";
import map_ico from "../assets/ico/ico_1.svg"

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };
    const showSuccessMess = () => {
        document.getElementById("alertMess").innerHTML =
            "<div style='background-color: green; width: 100%; margin-top: 2rem; height: 6rem; text-align: center; font-size: 2rem; color: white'>Email send Successfully</div>";

        setTimeout(function () {
            window.location.reload()
        }, 3000)
    };
    const showErrorMessage = () => {
        document.getElementById("alertMess").innerHTML =
            "<div style='background-color: red; width: 100%; margin-top: 2rem; height: 6rem; text-align: center; font-size: 2rem; color: white'>An error occured</div>";

        setTimeout(function () {
            document.getElementById("alertMess").innerHTML = ""
        }, 2000)
    }
    const submit = () => {
        if (message.length < 3 || name.length < 3 || email.length < 3) {
            return;
        }
        const data = {
            email,
            message,
            name,
        };
    };
    return (
        <div >
            <div className="text-center mb-5">
                <h2 >Contactez Nous</h2>
            </div>
            <div className="row" style={{ justifyContent: "center", marginTop: "100px" }}>
                <div className="col-lg-4 ml-auto pl-lg-5 ">
                    <div style={{ textAlign: "left", fontSize:"24px", color:"white" }} className="row mt-5">
                        <div className="social-div">
                            <img
                                src="https://img.icons8.com/android/24/ffffff/phone.png"
                                alt="Phone"
                                className="social-icons"
                            />
                            <span class="ml-2">Appelez-nous:</span><br />
                            <b class="ml-5">+32 494 94 55 03 </b>

                        </div>
                        <div className=" mt-4">
                            <img
                                src="https://img.icons8.com/android/24/ffffff/phone.png"
                                alt="Phone"
                                className="social-icons"
                            />
                            <span class="ml-2">Localisation:</span><br />
                            <b class="ml-5">Rue sainte-adèle 10 5030 Gembloux</b>

                        </div>

                        <div className=" mt-4">
                            <img
                                src="https://img.icons8.com/android/24/ffffff/phone.png"
                                alt="Phone"
                                className="social-icons"
                            />
                            <span class="ml-2">Disponible le:</span><br />
                            <b class="ml-5">Lundis - vendredis </b><br />
                            <b class="ml-5"> Les week-end sur reservation</b>

                        </div>

                    </div>
                </div>
                <div className="col-lg-6 ml-auto pl-lg-5"  >
                    <div className="form-group input-field">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Nom"
                            value={email}
                            onChange={(event) => handleName(event)}
                        />
                    </div>

                    <div className="form-group input-field">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => handleEmail(event)}
                        />
                    </div>
                    <div className="form-group input-field">
                        <textarea
                            name="message"
                            className="form-control message"
                            id="message"
                            cols="30"
                            rows="4"
                            value={message}
                            placeholder="Message"
                            onChange={(event) => handleMessage(event)}
                        ></textarea>
                    </div>
                    <div  style={{marginRight: "40%" }}>
                        <button className="send-btn" onClick={() => submit()}>
                            {" "}
                            Envoyer
                        </button>
                    </div>

                    <div id="alertMess"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;