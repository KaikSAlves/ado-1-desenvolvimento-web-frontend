import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';


export default function Editar() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (state?.turma) {
        setFormData(state.turma);
    }
  }, [state]);



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
    //logica para editar
  };

  const voltar = () => {
    navigate('/')
  }

    return (
        <div className='pagina-editar pagina'>
            <header className='cabecalho'>
                <i className='fa fa-arrow-left' onClick= {voltar}></i>
                <h1>ADO 1 - Aplicação Full Stack CRUD</h1>
            </header>
            <div className="container-dados">
                <form onSubmit={handleSubmit} className="container-formulario">
                    <h2>Edite os campos e confirme</h2>

                    <input
                        type="number"
                        name="id_turma"
                        value={formData.id_turma}
                        onChange={handleChange}
                        placeholder="Id"
                        required
                    />
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
                        placeholder="Capacidade"
                        required
                    />
                    <br />
                    <div className="container-checkbox">
                        <span>Ativo</span>
                        <input className="checkbox"
                            type="checkbox"
                            name="bt_ativo"
                            checked={formData.bt_ativo}
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
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    )
}