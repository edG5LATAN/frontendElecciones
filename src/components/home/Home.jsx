import React, { useContext, useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Contexto } from "../../contexto/Contexto";
import { loginService } from "../../service/ServiceBackend";
import { alertInvalido, alertOk } from "../../service/Listas";

function Home() {
  const {login,setLogin,setUser}= useContext(Contexto)
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const useNavi= useNavigate();


  const loguearse = () => {
    if (email != "" && pass != "") {
      const datos={
        "correo":email,
        "password":pass
      }
      loginService(datos,setLogin,useNavi,alertOk,alertInvalido,setUser)
      return 
    }
    return alertInvalido("User and password invalid");
  };


  return (
    <div className="home_contenedor">
      <div className="home_caja p-2 ">
        <h2 className="text-center p-2 m-2 text-uppercase">school elections</h2>
        <div className="home_caja_votar">
          <form className="p-2" novalidate>
            <div className="">
              <label for="validationDefault01" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="">
              <label for="validationDefault01" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="validationDefault01"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-12 mt-3">
              <button
                className="btn btn-primary"
                type="button"
                onClick={loguearse}
              >
                Login
              </button>
            </div>
            <div className="pt-2">
              <p className="fst-italic text-body-secondary">
                If you are not logged in, press{" "}
                <Link to={"/register"}>Here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
