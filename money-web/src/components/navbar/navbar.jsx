import { useState } from "react";
import icons from "../../styles/icons";
import "./navbar.css";

const Navbar = (props) => {
  const [filtro, setFiltro] = useState("");
  return (
    <div className="navbar">
      <img src={icons.logo} alt="" />
      <div>
        {props.search && (
          <>
            <input
              onChange={(e) => setFiltro(e.target.value)}
              className="rounded"
              type="text"
              id=""
            />
            <button
              onClick={() => props.onClickSearch(filtro)}
              className="btn btn-blue rounded"
            >
              Buscar
            </button>
          </>
        )}
      </div>
      <div className="dashboard">
        {props.total && (
          <>
            <div>Total de Gastos</div>
            <div>
              R$:
              {props.total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
