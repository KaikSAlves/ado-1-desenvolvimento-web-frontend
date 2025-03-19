import "./index.scss";
import {useEffect, useState } from "react";
import { listarTurmas , excluirTurma} from "../../service/ApiService";
import { useNavigate } from "react-router-dom";

export default function Tabela() {
  const navigate = useNavigate();
  const [turmas, setTurmas] = useState([]);
  const [turmaAlterar, setTurmaAlterar] = useState({});
  
  useEffect(() => {
    const carregarTurmas = async () => {
        const dados = await listarTurmas();
        setTurmas(dados);
    };

    carregarTurmas();
  }, []);

  const editarTurma = (turma) => {
    setTurmaAlterar(turma);
    navigate('/editar', {state : {turma}});
  };

  const deletarTurma = async (id) => {
    const result = await excluirTurma(id);
    setTurmas(turmas.filter((turma) => turma.id_turma !== id));

    alert("Linhas afetadas " + result.affectedRows );
  };

  

  return (
    <div>
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
          {turmas.map((turma) => (
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
