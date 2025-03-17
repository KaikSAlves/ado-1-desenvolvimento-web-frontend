import './index.scss';
import { useState } from 'react';

export default function Tabela(){
    const [turmas, setTurmas] = useState([
      { id: 1, nm_turma: 'TADS1', ds_curso: 'ADS', nr_ano_letivo: 3, qtd_capacidade: 30, bt_ativo: true, dt_inclusao: '2024-09-12' }
    ]);
  
    const editarTurma = (id) => {
    };
  
    const deletarTurma = (id) => {
      setTurmas(turmas.filter(turma => turma.id_turma !== id));
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id_turma</th>
              <th>nm_turma</th>
              <th>ds_curso</th>
              <th>nr_ano_letivo</th>
              <th>qtd_capacidade</th>
              <th>bt_ativo</th>
              <th>dt_inclusao</th>
              <th>Acao</th>
            </tr>
          </thead>
          <tbody>
            {turmas.map(turma => (
              <tr key={turma.id_turma}>
                <td>{turma.nm_turma}</td>
                <td>{turma.ds_curso}</td>
                <td>{turma.nr_ano_letivo}</td>
                <td>{turma.qtd_capacidade}</td>
                <td>{turma.bt_ativo}</td>
                <td>{turma.dt_inclusao}</td>
                <td>
                  <button onClick={() => editarTurma(turma.id_turma)}>Editar</button>
                  <button onClick={() => deletarTurma(turma.id_turma)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };