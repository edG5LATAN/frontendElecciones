import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_contenedor">
      <div className="home_caja w-50 mw-100 p-2 ">
        <h2 className="text-center p-2 m-2 text-uppercase">
        school elections
        </h2>
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
                value=""
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
              <p>If you are not logged in, press <Link to={"/registrase"}>Here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
