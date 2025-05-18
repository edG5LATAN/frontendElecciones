import axios from "axios";

const urlBackend= "http://localhost:8080/v1";

export const loginService=(datos,setlogin,useNavi,alertOk,alertInvalido)=>{
   axios.post(urlBackend+"/loguearse/login",datos)
   .then(res=>{
    if(res.status==200){
      console.log(res.status)
    setlogin(true)
    useNavi("/vote")
    alertOk("Login true")
    }
   })
   .catch(error=>{
    alertInvalido("Invalid email and password")
    console.log(error)})
}

export const logOutService=(setLogin,alertOk)=>{
  axios.post(urlBackend+"/loguearse/logout")
  .then(rest=>{
    setLogin(false);
    alertOk("Logout to system..")
    console.log(rest.status)})
  .catch(error=>console.log(error))
}

export const crearAlumnoService=(datos,alertOk,alertInvalido)=>{
  axios.post(urlBackend+"/alumno/crear",datos)
  .then(res=>{
    console.log(res.status)
    alertOk("Student created correctly")
  })
  .catch(error=>{
    alertInvalido("Fill all your information")
    console.log(error)})
}