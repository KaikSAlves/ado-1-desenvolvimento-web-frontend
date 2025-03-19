import { useNavigate } from "react-router-dom";
import Tabela from "../../components/Tabela";
import "./index.scss";

export default function App() {
  const navigate = useNavigate();

  function irParaCriar() {
    navigate('/criar');
  }

  return (
    <div className="pagina-app pagina">
      <header className="cabecalho">
        <h1>ADO 1 - Aplicação Full Stack CRUD</h1>
      </header>

      <section className="secao">
        <div className="container-sub-cabecalho">
          <h2>Turmas</h2>
          <button className="botao-criar" onClick={irParaCriar}>Criar</button>
        </div>
        <div className="container-tabela">
          <Tabela></Tabela>
        </div>
      </section>
    </div>
  );
}
