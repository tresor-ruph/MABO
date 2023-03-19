import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import { Fade } from "react-reveal";



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
            "<div style='color: green; font-weight: bolder; margin-top: 2rem; text-align: left; font-size: 2rem'>Mail envoyé</div>";

        setTimeout(function () {
            window.location.reload()
        }, 3000)
    };
    const showErrorMessage = () => {
        document.getElementById("alertMess").innerHTML =
            "<div style='margin-top: 2rem; text-align: left; font-size: 2rem; color: red'>Une erreur est survenue</div>";

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
        axios
            .post("https://mabo-server.onrender.com/mailTo", data)
            .then((res) => {
                console.log(res)
                showSuccessMess();
            })
            .catch((err) => {
                showErrorMessage()
                console.log(err)
            });
    };
    return (
        <div >
            <div className="text-center mb-5">
                <h2 >Contactez Nous</h2>
            </div>
            <div className="row" style={{ justifyContent: "center", marginTop: "100px" }}>
                <Fade left>
                    <div className="col-lg-4 ml-auto pl-lg-5 ">
                        <div style={{ textAlign: "left", fontSize: "24px", color: "white" }} className="row mt-5">
                            <div className="social-div">

                                <span className="ml-2">Appelez-nous:</span><br />
                                <b className="ml-5">+32 494 94 55 03 </b>

                            </div>
                            <div className=" mt-4">

                                <span className="ml-2">Localisation:</span><br />
                                <b className="ml-5">Rue sainte-adèle 10 5030 Gembloux</b>

                            </div>

                            <div className=" mt-4">

                                <span className="ml-2">Disponible le:</span><br />
                                <b className="ml-5">Lundis - vendredis </b><br />
                                <b className="ml-5">Week-end sur reservation</b>

                            </div>

                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-lg-6 ml-auto pl-lg-5"  >
                        <div className="form-group input-field">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Nom"
                                value={name}
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
                        <div style={{ marginRight: "40%" }}>
                            <button className="send-btn" onClick={() => submit()}>
                                {" "}
                                Envoyer
                            </button>
                        </div>

                        <div id="alertMess"></div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;