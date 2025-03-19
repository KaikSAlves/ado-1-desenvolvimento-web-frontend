import "./index.scss";
import { useState } from "react";
import { criarTurma } from "../../service/ApiService";
import { useNavigate } from "react-router-dom";

export default function Criar() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nm_turma: "",
    ds_curso: "",
    nr_ano_letivo: "",
    qtd_capacidade: "",
    bt_ativo: false,
    dt_inclusao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name == 'bt_ativo'){
        setFormData({
            ...formData,
            [name]: e.target.checked,
          });
    }else{
        setFormData({
            ...formData,
            [name]: value,
          });
    }
  };

  const handleSubmit = async (e) => {
    let result = await criarTurma(formData);
    alert("Usuario criado, id " + result.id);
  };

  const voltar = () => {
    navigate('/')
  }

  return (
    <div className="pagina-criar pagina">
      <header className="cabecalho">
        <i className="fa fa-arrow-left" onClick={() => voltar()}></i>
        <h1>ADO 1 - Aplicação Full Stack CRUD</h1>
      </header>
      <div className="container-dados">
        <form onSubmit={handleSubmit} className="container-formulario">
          <h2>Preencha os campos do formulário</h2>

          <input 
            type="text"
            name="nm_turma"
            value={formData.nm_turma}
            onChange={handleChange}
            placeholder="Nome da turma"
            required
          />
          <br />
          <input 
            type="text"
            name="ds_curso"
            value={formData.ds_curso}
            onChange={handleChange}
            placeholder="Descrição do curso"
            required
          />
          <br />
          <input 
            type="number"
            name="nr_ano_letivo"
            value={formData.nr_ano_letivo}
            onChange={handleChange}
            placeholder="Numero ano letivo"
            required
          />
          <br />
          <input 
            type="number"
            name="qtd_capacidade"
            value={formData.qtd_capacidade}
            onChange={handleChange}
            placeholder="Quantidade capacidade"
            required
          />
          <br />
          <div className="container-checkbox">
            <span>Ativo</span>
                <input className="checkbox"
                    type="checkbox"
                    name="bt_ativo"
                    value={formData.bt_ativo}
                    onChange={handleChange}
                />
          </div>
          <br />
          <div className="container-data">
            <span>Data de inclusao</span>
                <input 
                    type="date"
                    name="dt_inclusao"
                    value={formData.dt_inclusao}
                    onChange={handleChange}
                    required
                />
          </div>
          <br />
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}
