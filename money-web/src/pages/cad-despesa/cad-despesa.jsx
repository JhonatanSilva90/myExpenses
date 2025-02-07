import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./cad-despesa.css";

const CadDespesa = () => {
  const { idUrl } = useParams();
  const navigate = useNavigate();
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const SalvarDados = () => {
    navigate("/");
  };

  const GetDadosDespesa = (id) => {
    setValor(150);
    setDescricao("Compras no Mercado");
    setCategoria("Mercado");
  };

  useEffect(() => {
    if (idUrl != "add") {
      GetDadosDespesa(idUrl);
    }
  }, []);
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container-despesa-cad">
        <div className="box-despesa-cad">
          {idUrl === "add" ? <h1>Novas Despesa</h1> : <h1>Editar Despesa</h1>}
          <h1>Nova Despesa</h1>
          <div className="input-group">
            <p>Valor</p>
            <input
              type="text"
              className="input-lg w100"
              id="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="input-group">
            <p>Descrição</p>
            <input
              type="text"
              className="w100"
              id="valor"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div className="input-group">
            <p>Categoria</p>
            <select
              id="categoria"
              className="w100"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Carro">Carro</option>
              <option value="Casa">Casa</option>
              <option value="Lazer">Lazer</option>
              <option value="Mercado">Mercado</option>
              <option value="Educação">Educação</option>
              <option value="Viagem">Viagem</option>
            </select>
          </div>
          <div className="btn-group text-right">
            <button
              onClick={() => navigate("/")}
              className="btn btn-blue-outline rounded"
            >
              Cancelar
            </button>
            <button
              onClick={SalvarDados}
              className=" btn btn-blue ml-20 rounded"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadDespesa;
