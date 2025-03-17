import Tabela from '../../components/Tabela';
import './index.scss';

export default function App() {

  return (
    <div className="pagina-app">
      <header className='cabecalho'>
        <h1>ADO 1 - Aplicação Full Stack CRUD</h1>
      </header>

      <section className='corpo'>
        <h2>Turmas</h2>
        <button>Create</button>

        <Tabela></Tabela>
      </section>
    </div>
  );
}
