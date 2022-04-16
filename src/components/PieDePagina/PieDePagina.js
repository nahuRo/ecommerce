import { NavLink } from 'react-router-dom'
const PieDePagina = () => {
  return (
    <>
    <hr/>
      <div>
        <div>
          <h2>compra smartphone</h2>
          <h3>
            Busca, compara y compra los mejores dispositivos y tecnología al
            mejor precio.
          </h3>
        </div>
        <div>
          <h3>MARCAS</h3>
        </div>
        <div>
            <h3>LEGAL</h3>
            <NavLink to="/PoliticaDePrivacidad">Política de Privacidad</NavLink>
            <NavLink to='/AvisoLegal'>Aviso Legal</NavLink>
        </div>
      </div>
      <div>
        © 2022 Compra Smartphone. Todos los derechos reservados.
      </div>
    </>
  );
};

export default PieDePagina;
