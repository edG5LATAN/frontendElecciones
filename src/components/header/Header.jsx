import React, { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Contexto } from "../../contexto/Contexto";
import { logOutService } from "../../service/ServiceBackend";
import { alertOk } from "../../service/Listas";

function Header() {
  const { setLogin } = useContext(Contexto);
  const useNavig = useNavigate();

  return (
    <ul className="nav nav-underline justify-content-center pt-2 pb-2">
      <li className="nav-item">
        {/* <a className="nav-link active" aria-current="page" href="#">Active</a> */}
        <img
          onClick={() => {
            useNavig("/vote");
          }}
          className="header_img"
          src="./images/voto.png"
          alt="imagen de nav"
        />
      </li>
      {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li> */}

      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">
          Elections 2025
        </a>
      </li>
      <li className="nav-item">
        <Link to={"/count"} className="nav-link text-primary">
          Count
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/about"} className="nav-link text-primary">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"/"}
          className="nav-link text-danger"
          onClick={() => {
            logOutService(setLogin,alertOk);
          }}
        >
          Log-Out
        </Link>
      </li>
    </ul>
  );
}

export default Header;
