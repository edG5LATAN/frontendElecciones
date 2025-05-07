import React from "react";
import "./Partidos.css";

function Partidos() {
  const listaBandera = [
    {
      nombre: "DC",
      bandera: "dc.png",
    },
    {
      nombre: "liberaL",
      bandera: "liberal.png",
    },
    {
      nombre: "libre",
      bandera: "libre.png",
    },
    {
      nombre: "nacionalista",
      bandera: "nacionalista.jpg",
    },
    {
      nombre: "pac",
      bandera: "pac.jpg",
    },
    {
      nombre: "pinu",
      bandera: "pinu.png",
    },
    {
      nombre: "ud",
      bandera: "ud.png",
    },
    {
      nombre: "vamos",
      bandera: "vamos.png",
    },
  ];

  return (
    <div className="partido_contenedor">
      <div className="container d-flex flex-wrap justify-content-around">
        {listaBandera.map((res, index) => {
          return (
            <div key={index} class="partido_contenedores_partidos card m-2">
              <img
                src={`/banderas/${res.bandera}`}
                clasName="card-img-top imagen_banderas"
                alt={`partidos-${res.nombre}`}
              />
              <div className="card-body">
                <p className="card-text text-center">
                  <input
                    className="w-75 rounded-2 border-black shadow-sm text-center"
                    type="text"
                    name="vosto"
                    value="0"
                    readOnly
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Partidos;
