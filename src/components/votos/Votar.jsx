import React from 'react'
import './Voto.css'
import { Link } from 'react-router-dom'



function Votar() {
  return (
    <div className='voto_contenedor'>
      <div className='d-flex w-75 justify-content-between bg-danger rounded-3 p-3'>
        <div className="p-2" novalidate>
          <div className="">
            <label for="validationDefault01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value=""
              readOnly
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
              value=""
              readOnly
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
              value=""
              readOnly
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
              value=""
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
        </div>
        <div className='d-grid'>
          <div className="">
            <label for="validationDefault01" className="text-center">
              Password
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            
          </div>
          <div>
              <img className='w-25' src="./images/voto.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Votar