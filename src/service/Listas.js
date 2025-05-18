import Swal from "sweetalert2";

export const listaBandera = [
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

export const alertOk = (msj) => {
  Swal.fire({
    title: msj,
    icon: "success",
    draggable: true,
  });
};
export const alertInvalido = (msj) => {
  Swal.fire({
    icon: "error",
    title: "Falla...",
    text: msj,
    // footer: '<a href="#">Why do I have this issue?</a>'
  });
}

export const listaGrados = [
  "FIRST",
  "SECOND",
  "THIRD",
  "FOURTH",
  "FIFTH",
  "SIXTH"
]

