import "./index.scss";
import {useEffect, useRef, useState } from "react";
import { listarTurmas , excluirTurma} from "../../service/ApiService";
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
    navigate('/editar', {state : {turma}});
  };

  const deletarTurma = async (id) => {
    const result = await excluirTurma(id);
    setFiltros(filtros.filter((turma) => turma.id_turma !== id));

    alert("Linhas afetadas " + result.affectedRows );
  };

  function filtrarPorData(e){
    //pegar resultado banco de dados
    setFiltros(filtros.filter((turma) => turma.dt_inclusao == e.target))
  }

  function filtrarPorDataECurso(e){
    //pegar resultado banco de dados
  }

  function limparFiltros(){
    setFiltros(turmas);
    inputData.current.value = "";
    inputCurso.current.value = "";
  }
  

  return (
    <div>
      <input type="date" onChange={filtrarPorData} ref={inputData}/>
      <input type="text" placeholder="Filtre pelo nome do curso" ref={inputCurso}/>
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
