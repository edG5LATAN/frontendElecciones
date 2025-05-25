import React, { useContext, useEffect, useState } from "react";
import "./Partidos.css";
import { allVotes } from "../../service/ServiceBackend";
import { Contexto } from "../../contexto/Contexto";

function Partidos() {
  const { party } = useContext(Contexto);
  const [voteCount, setVoteCount] = useState({});

  // Inicializar contadores y obtener votos
  useEffect(() => {
    // Primero inicializamos todos los contadores en 0
    const initialCount = {};
    party.forEach(p => {
      initialCount[p.nombre.toLowerCase()] = 0;
    });
    
    // Luego obtenemos los votos y actualizamos los contadores
    allVotes(
      (response) => {
        const votesData = response;
        const updatedCount = {...initialCount};
        
        votesData.forEach(voto => {
          const partidoKey = voto.partido.toLowerCase();
          if (updatedCount.hasOwnProperty(partidoKey)) {
            updatedCount[partidoKey] += 1;
          }
        });
        
        setVoteCount(updatedCount);
      },
      (error) => {
        console.error("Error fetching votes:", error);
        // Si hay error, al menos mostramos los contadores en 0
        setVoteCount(initialCount);
      }
    );
  }, [party]);

  return (
    <div className="partido_contenedor">
      <div className="container d-flex flex-wrap justify-content-around">
        {party.map((partido, index) => {
          const partidoKey = partido.nombre.toLowerCase();
          const votos = voteCount[partidoKey] || 0;

          return (
            <div key={index} className="partido_contenedores_partidos card m-1">
              <img
                src={partido.bandera}
                className="card-img-top imagen_banderas"
                alt={`partido-${partido.nombre}`}
              />
              <div className="card-body">
                <p className="card-text text-center">
                  <input
                    className="w-75 rounded-2 border-black shadow-sm text-center"
                    type="text"
                    name="votos"
                    value={votos}
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