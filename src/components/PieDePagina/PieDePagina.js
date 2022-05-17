import './PieDePagina.css'
import { NavLink } from 'react-router-dom'

const PieDePagina = () => {
    return (
        <footer>
            <div className="cont__footerInfo">
                <div className="eslogan">
                    <h2>compra smartphone</h2>
                    <h3>Busca, compara y compra los mejores dispositivos y tecnología al
                        mejor precio.
                    </h3>
                </div>
                <div className="cont__LinksD">
                    <NavLink to="/PoliticaDePrivacidad">Política de Privacidad</NavLink>
                    <NavLink to='/AvisoLegal'>Aviso Legal</NavLink>
                </div>
            </div>
            <div className="derechos">
                © 2022 Compra Smartphone. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default PieDePagina;
