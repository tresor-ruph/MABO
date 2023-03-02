import React, { useEffect, useState } from "react";
import ls from 'local-storage'

export default function Dashboard() {
  const [values, setValues] = useState([]);
  const handlelogout = () => {
    ls.remove('login')
    window.location.replace("/adminLogin");


  }

  const handleBlockAccount = (x) => {
    fetch("https://help-recover-api.herokuapp.com/updatePassword/", {
      method: "PUT",
      body: JSON.stringify({
        id: x,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`https://help-recover-api.herokuapp.com/service/getService/`)
      .then((response) => response.json())
      .then((json) => {
        setValues(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="page-container" className="main-admin">
      <div className="side-bar">
        <div className="side-bar-links">
          <div className="side-bar-logo text-center py-3">
            <h3>HELP RECOVER ADMIN PANNEL</h3>
          </div>
        </div>
      </div>
      <div className="main-body-content w-100 ets-pt">
        <div className="table-responsive bg-light">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Utilisateur signalé</th>
                <th scope="col">Description</th>
                <th scope="col">Preuves</th>
                <th scope="col">Bloquer</th>
              </tr>
            </thead>
            <tbody>
              {values.map((l, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i}</th>

                    <td>{l.toBlock}</td>
                    <td>{l.descriptif}</td>
                    <td>
                      <a
                        href={l.preuve}
                        className="btn btn-success"
                        id="btn"
                        download
                      >
                        Preuve
                      </a>
                      <br />
                      <br />
                    </td>
                    <td>
                      {" "}
                      <a
                        href="#"
                        className="btn btn-danger"
                        id="btn"
                        onClick={() => handleBlockAccount(301)}
                      >
                        Bloquer
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <a href="#" className="btn btn-success" id="btn" onClick={() => handlelogout()}>
          deconnexion
        </a>
      </div>
    </div>
  );
}
