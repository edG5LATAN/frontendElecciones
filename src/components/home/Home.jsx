import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Home() {
  const [email,setEmail]= useState("")
  const [pass,setPass]= useState("")


  return (
    <div className="home_contenedor">
      <div className="home_caja w-50 mw-100 p-2 ">
        <h2 className="text-center p-2 m-2 text-uppercase">school elections</h2>
        <div className="home_caja_votar">
          <form className="p-2" novalidate>
            <div className="">
              <label for="validationDefault01" className="form-label">
                Email
              </label>
              <input
                type="text"
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
            <div className="col-12 mt-3">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  Swal.fire({
                    title: "your's Login is success",
                    icon: "success",
                    draggable: true,
                  });
                }}
              >
                Login
              </button>
            </div>
            <div className="pt-2">
              <p>
                If you are not logged in, press{" "}
                <Link to={"/register"}>Here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
