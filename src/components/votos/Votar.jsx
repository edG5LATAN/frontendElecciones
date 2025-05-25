import React, { use, useContext, useEffect, useState } from "react";
import "./Voto.css";
import Swal from "sweetalert2";
import { byEmail, createVote, listParty } from "../../service/ServiceBackend";
import { Contexto } from "../../contexto/Contexto";
import { alertInvalido, alertOk } from "../../service/Listas";

function Votar() {
  const [bandera, setbandera] = useState("");
  const [name, setname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [idAlumn, setIdAlumn] = useState("");
  const [idParty, setIdParty] = useState("");
  const { user, party, setParty } = useContext(Contexto);

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    byEmail(user, setDatos);
  }, []);

  useEffect(() => {
    addInformation();
    getParties();
  }, [datos]);

  const getParties = () => {
    listParty(setParty);
  };
  const addInformation = () => {
    setIdAlumn(datos.id);
    setname(datos.nombre);
    setLastName(datos.apellido);
    setEmail(datos.correo);
    setGrade(datos.grado);
  };
  const cleanData = () => {
    setname();
    setLastName();
    setEmail();
    setGrade();
  };
  const newVote = () => {
    if(idParty!=""||idParty!=0){
      const datos = {
      alumno: idAlumn,
      partido: idParty,
    };
    createVote(datos, alertOk, alertInvalido);
    }else{
      alertInvalido("select one party..")
    }

  };

  return (
    <div className="voto_contenedor">
      <h2 className="text-capitalize fw-bold">School Elections</h2>
      <div className="voto_contenedor_caja d-flex justify-content-between bg-primary rounded-3 p-3">
        <div className="voto_contenedor_1 p-2" novalidate>
          {datos === "" ? (
            <div>"chargin information... waint"</div>
          ) : (
            <>
              <div className="">
                <label for="validationDefault01Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01Name"
                  value={name}
                  readOnly
                />
              </div>
              <div className="">
                <label for="validationDefault01LastName" className="form-label">
                  Last-Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01LastName"
                  value={lastName}
                  readOnly
                />
              </div>
              <div className="pb-3">
                <label for="validationDefault01Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationDefault01Email"
                  value={email}
                  readOnly
                />
              </div>
              <div className="">
                <label for="validationDefault01Grade" className="form-label">
                  Grade
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01Grade"
                  value={grade}
                  readOnly
                />
              </div>
            </>
          )}
        </div>
        <div className="voto_contenedor_1 d-grid p-2">
          <div className="text-center mb-3">
            <label
              for="validationDefault01"
              className="text-center text-capitalize"
            >
              political party
            </label>
            <select
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                setbandera(e.target.value);
                setIdParty(selectedOption.dataset.id);
              }}
              className="form-select text-uppercase"
              aria-label="Default select example"
            >
              <option selected value=" ">
                Select One
              </option>
              {party.map((res, index) => {
                return (
                  <option
                    key={index}
                    data-id={res.id}
                    value={res.bandera}
                    className="text-uppercase"
                  >
                    {res.nombre}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="voto_img"
              src={
                bandera == ""
                  ? "https://cdn-icons-png.flaticon.com/512/1582/1582013.png"
                  : `${bandera}`
              }
              alt={bandera}
            />
          </div>
        </div>
      </div>
      <div className="d-grid justify-content-center align-items-center">
        <div className="col-12 mt-3 text-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              newVote();
            }}
          >
            Vote For
          </button>
        </div>
      </div>
    </div>
  );
}

export default Votar;
