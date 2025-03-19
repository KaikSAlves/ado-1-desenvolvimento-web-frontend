import "./index.scss";

export default function Criar() {
  return (
    <div className="pagina-criar pagina">
      <header className="cabecalho">
        <h1>ADO 1 - Aplicação Full Stack CRUD</h1>
      </header>
      <div className="container-dados">
        <div className="container-formulario">
          <h2>Preencha os campos do formulário</h2>
          <input type="text" placeholder="Nome da turma" />
          <br />
          <input type="text" placeholder="Descrição do curso" />
          <br />
          <input type="number" placeholder="Numero ano letivo" />
          <br />
          <input type="number" placeholder="Quantidade capacidade" />
          <br />
          <div className="container-checkbox">
            <span>Ativo</span>
            <input type="checkbox" className="checkbox" />
          </div>
          <br />
          <div className="container-data">
            <span>Data de inclusao</span>
            <input type="date" />
          </div>
        </div>
      </div>
    </div>
  );
}
