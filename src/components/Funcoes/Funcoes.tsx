import { funcionalidades } from "../../Data/funcionalidades";
import './Funcoes.css';

function Funcoes() {
  return (
    <section className="funcoes">
      <div className="container-funcoes">
        <div className="Titulos">
            <h2 className="tagFuncoes">Por que escolher o BomTech?</h2>
            <p>Soluções completas desenhadas para o ecossistema de educação técnica profissionalizante.</p>
        </div>
       
        <div className="lista-funcoes">
          {funcionalidades.map((funcao) => (
            <div key={funcao.id} className="funcao-item">
              <span className="icon-funcao">{funcao.icon}</span>
              <h3 className="titulo-funcao">{funcao.title}</h3>
              <p className="descricao-funcao">{funcao.description}</p>
            </div>
          ))}
          </div>
        </div>
    </section>
  );
}
export default Funcoes;