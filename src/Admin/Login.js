import React, { useState } from "react";
import "./login.css";
import { RiAdminFill } from "react-icons/ri";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(" ");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    fetch(
      `https://help-recover-api.herokuapp.com/contacts/${username}/${password}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.message === 'true') {

          window.location.replace("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p style={{ fontFamily: "revert", textAlign: "center" }}>
        <h1>Connectez-vous à votre espace administrateur</h1>
      </p>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <RiAdminFill color="rgb(128,255,255)" size="3em" />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Identifiant"
              onChange={handleUsername}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Mot de passe"
              onChange={handlePassword}
            />
            <input
              type="submit"
              id="modifier"
              className="fadeIn fourth"
              value="Se connecter"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
