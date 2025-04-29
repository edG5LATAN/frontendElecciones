import React from "react";
import "./Voto.css";
import Swal from "sweetalert2";

function Votar() {
  return (
    <div className="voto_contenedor">
      <h2 className="text-capitalize fw-bold">School Elections</h2>
      <div className="d-flex w-75 justify-content-between bg-primary rounded-3 p-3">
        <div className="voto_contenedor_1 p-2" novalidate>
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
              School
            </label>
            <input
              type="password"
              className="form-control"
              id="validationDefault01"
              value=""
              readOnly
            />
          </div>

          {/* <div className="col-12 mt-3">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <div className="pt-2">
            <p className='fst-italic'>If you've email and password return <Link to={"/"}>Here</Link></p>
          </div> */}
        </div>
        <div className="voto_contenedor_1 d-grid p-2">
          <div className="text-center">
            <label for="validationDefault01" className="text-center">
              political party
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select One</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="voto_img" src="./images/voto.png" alt="" />
          </div>
        </div>
      </div>
      <div className="d-grid justify-content-center align-items-center">
        <div className="col-12 mt-3 text-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              Swal.fire({
                title: "your's vote was created",
                icon: "success",
                draggable: true,
              });
            }}
          >
            Vote For
          </button>
        </div>
        {/* <div className="pt-2">
            <p className='fst-italic'>If you've email and password return <Link to={"/"}>Here</Link></p>
          </div> */}
      </div>
    </div>
  );
}

export default Votar;
