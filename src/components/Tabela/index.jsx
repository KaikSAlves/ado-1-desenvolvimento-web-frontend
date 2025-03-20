import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { listarPorAno, listarTurmas, excluirTurma, listarPorAnoECurso } from "../../service/ApiService";
import { useNavigate } from "react-router-dom";

export default function Tabela() {
  const navigate = useNavigate();
  const [turmas, setTurmas] = useState([]);
  const [filtros, setFiltros] = useState([]);

  const inputData = useRef(null);
  const inputCurso = useRef(null);

  useEffect(() => {
    const carregarTurmas = async () => {
      const dados = await listarTurmas();
      setTurmas(dados);
      setFiltros(dados);
    };

    carregarTurmas();
  }, []);

  const editarTurma = (turma) => {
    const data = new Date(turma.dt_inclusao);

    const ano = data.getUTCFullYear();
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
    const dia = String(data.getUTCDate()).padStart(2, '0');

    turma.dt_inclusao = `${ano}-${mes}-${dia}`;
    navigate('/editar', { state: { turma } });
  };

  const deletarTurma = async (id) => {
    console.log(id)
    const result = await excluirTurma(id);
    setFiltros(filtros.filter((turma) => turma.id_turma !== id));
    setTurmas(turmas.filter((turma) => turma.id_turma !== id));
    alert("Linhas afetadas " + result.affectedRows);
  };

  async function filtrarPorData(e) {
    let ano = e.target.value;
    if(ano == ""){
      setFiltros(turmas);
    }else{
      const result = await listarPorAno(e.target.value)
      setFiltros(result);
    }
  }

  async function filtrarPorAnoECurso(e) {
    let curso = e.target.value;
  
    if(inputData.current.value != ""){
      let ano = inputData.current.value;
      const result = await listarPorAnoECurso(ano, curso);
      setFiltros(result);
    }
  
  }

  function limparFiltros() {
    setFiltros(turmas);
    inputData.current.value = "";
    inputCurso.current.value = "";
  }


  return (
    <div>
      <input type="text" onChange={filtrarPorData} placeholder = "Filtre por um ano" ref={inputData} />
      <input type="text" onChange={filtrarPorAnoECurso} placeholder="Filtre pelo nome do curso" ref={inputCurso} />
      <button className="botao-limpar" onClick={limparFiltros}>Limpar</button>
      <table className="tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Descricao</th>
            <th>Ano Letivo</th>
            <th>Capacidade</th>
            <th>Ativo</th>
            <th>Inclusao</th>
            <th>Acao</th>
          </tr>
        </thead>
        <tbody>
          {filtros.map((turma) => (
            <tr key={turma.id_turma}>
              <td>{turma.id_turma}</td>
              <td>{turma.nm_turma}</td>
              <td>{turma.ds_curso}</td>
              <td>{turma.nr_ano_letivo}</td>
              <td>{turma.qtd_capacidade}</td>
              <td>{String(turma.bt_ativo)}</td>
              <td>{(turma.dt_inclusao)}</td>
              <td className="td-acao">
                <button onClick={() => editarTurma(turma)}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  className="botao-excluir"
                  onClick={() => deletarTurma(turma.id_turma)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
