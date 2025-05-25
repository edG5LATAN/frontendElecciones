import axios from "axios";

const urlBackend = import.meta.env.VITE_URL_BACKEND;

axios.defaults.withCredentials=true;

export const loginService = (datos, setlogin, useNavi, alertOk, alertInvalido, setUser) => {
  axios.post(urlBackend + "/loguearse/login", datos)
    .then(res => {
      if (res.status == 200) {
        console.log(res.status)
        setlogin(true)
        useNavi("/vote")
        setUser(datos.correo)
        alertOk("Login true")
      }
    })
    .catch(error => {
      alertInvalido("Invalid email and password")
      console.log(error)
    })
}

export const logOutService = (setLogin, alertOk) => {
  axios.post(urlBackend + "/loguearse/logout")
    .then(rest => {
      setLogin(false);
      alertOk("Logout to system..")
      console.log(rest.status)
    })
    .catch(error => console.log(error))
}

export const crearAlumnoService = (datos, alertOk, alertInvalido) => {
  axios.post(urlBackend + "/alumno/crear", datos)
    .then(res => {
      console.log(res.status)
      alertOk("Student created correctly")
    })
    .catch(error => {
      alertInvalido("Fill all your information")
      console.log(error)
    })
}

export const byEmail = (email,setDatos) => {
  axios.get(urlBackend+"/alumno/porCorreo/"+email)
  .then(res=>{
    setDatos(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}

export const listParty=(setDatos)=>{
  axios.get(urlBackend+"/partido/mostrar")
  .then(res=>{
    setDatos(res.data)  
  })
  .then(error=>{
    console.log(error)
  })
}

export const createVote=(datos,alertOk,alertInvalido)=>{
  axios.post(urlBackend+"/voto/crear",datos)
  .then(res=>{
    alertOk("your vote was created..")
  })
  .catch(error=>{
    alertInvalido("you user already voted..")
  })
}

export const allVotes=(setDatos)=>{
  axios.get(urlBackend+"/voto/mostrar")
  .then(res=>{
    setDatos(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}
