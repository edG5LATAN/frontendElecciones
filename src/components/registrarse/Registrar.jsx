import React, { useState } from 'react'
import './Registrar.css'
import { Link } from 'react-router-dom'

function Registrar() {

  const [name,setname]= useState("")
  const [lastName,setLastName]= useState("")
  const [grade,setGrade]= useState("")
  const [email,setEmail]= useState("")
  const [pass,setPass]= useState("")
  const [passR,setPassR]= useState("")


  return (
    <div className="registrar_contenedor">
      <div className="registrar_caja w-50 p-2">
        <h2 className="text-center p-2 m-2 text-uppercase">
        fill in your details
        </h2>
        <div className="registrar_caja_votar">
          <form className="p-2" novalidate>
            <div className="">
              <label for="validationDefault01" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                required
              />
            </div>
            <div className="">
              <label for="validationDefault01" className="form-label">
                Last-Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                value={lastName}
                onChange={(e)=>{setLastName(e.target.value)}}
                required
              />
            </div>
            <div className="pb-3">
              <label for="validationDefault01" className="form-label">
                Grade
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                value={grade}
                onChange={(e)=>{setGrade(e.target.value)}}
                required
              />
            </div>
            <div className="pb-3">
              <label for="validationDefault01" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="validationDefault01"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
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
                onChange={(e)=>{setPass(e.target.value)}}
                required
              />
            </div>
            <div className="">
              <label for="validationDefault01" className="form-label">
                Repeat to Password
              </label>
              <input
                type="password"
                className="form-control"
                id="validationDefault01"
                value={passR}
                onChange={(e)=>{setPassR(e.target.value)}}
                required
              />
            </div>
            <div className="col-12 mt-3">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <div className="pt-2">
              <p className='fst-italic'>If you've email and password return <Link to={"/"}>Here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registrar
