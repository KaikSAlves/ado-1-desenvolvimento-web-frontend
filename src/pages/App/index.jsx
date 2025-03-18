import Tabela from "../../components/Tabela";
import "./index.scss";

export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className="cabecalho">
        <h1>ADO 1 - Aplicação Full Stack CRUD</h1>
      </header>

      <section className="secao">
        <div className="container-sub-cabecalho">
          <h2>Turmas</h2>
          <button className="botao-criar">Criar</button>
        </div>
        <div className="container-tabela">
          <Tabela></Tabela>
        </div>
      </section>
    </div>
  );
}
