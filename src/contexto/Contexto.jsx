import { createContext, useState } from "react";


export const Contexto = createContext();

export const Datos= ({children})=>{
  const [user,setUser]=useState("")
  const [login,setLogin]=useState(false)
  const [info,setInfo]=useState("")
  const [party,setParty]=useState([])

  return(
    <Contexto.Provider value={{user,setUser,login,setLogin,info,setInfo,party,setParty}}>
     {children}
    </Contexto.Provider>
  )

}