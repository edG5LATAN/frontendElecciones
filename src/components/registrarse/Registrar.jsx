import React, { useState } from "react";
import "./Registrar.css";
import { Link } from "react-router-dom";
import { alertInvalido, alertOk, listaGrados } from "../../service/Listas";
import { crearAlumnoService } from "../../service/ServiceBackend";


function Registrar() {
  const [name, setname] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passR, setPassR] = useState("");

  const crearAlumno=()=>{
    
    if(verificarNulos() ==true && verificarPass()){
      const alumno={
          "nombre":name,
          "lastname":lastName,
          "grade":grade,
          "user":{
            "email":email,
            "password":pass
          }
        }
      crearAlumnoService(alumno,alertOk,alertInvalido);
      limpiarInput();
      return 
    }
    return alertInvalido("fill in all the fields!");
  }

  const verificarNulos=()=>{
    if(name!="" && lastName!="" && grade!="" && email!="" && pass!="" && passR!=""){
      return true
    }
    return false
  }

  const verificarPass=()=>{
     if(pass===passR){
      return true
     }
     return false
  }

  const limpiarInput=()=>{
    setname("")
    setLastName("")
    setEmail("")
    setGrade("")
    setPass("")
    setPassR("")
  }

  return (
    <div className="registrar_contenedor">
      <div className="registrar_caja p-2 mt-2 mb-4">
        <h2 className="text-center p-2 m-2 text-uppercase">
          fill in your details
        </h2>
        <div className="registrar_caja_votar">
          <form className="p-2" novalidate>
            <div className="">
              <label for="validationDefault01name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />
            </div>
            <div className="pb-2">
              <label for="validationDefault01lastname" className="form-label">
                Last-Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01lastname"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>

            <div className="pb-3">
              <label for="validationDefault01grade" className="form-label">
                Grade
              </label>
              <select
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected value="">
                  Select One
                </option>
                {listaGrados.map((res, index) => {
                  return (
                    <option key={index} value={res}>
                      {res}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pb-3">
              <label for="validationDefault01email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="validationDefault01email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="">
              <label for="validationDefault01password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="validationDefault01password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                required
              />
            </div>
            <div className="">
              <label for="validationDefault01password2" className="form-label">
                Repeat to Password
              </label>
              <input
                type="password"
                className="form-control"
                id="validationDefault01password2"
                value={passR}
                onChange={(e) => {
                  setPassR(e.target.value);
                }}
                required
              />
            </div>
           <p className={pass===passR ?"d-none" :"d-flex fst-italic text-danger"}>
                password is not the sime
              </p>


            <div className="col-12 mt-3">
              <button
               onClick={crearAlumno}
               className="btn btn-primary" 
               type="button">
                Login
              </button>
            </div>
            <div className="pt-2">
              <p className="fst-italic">
                If you've email and password return <Link to={"/"}>Here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
