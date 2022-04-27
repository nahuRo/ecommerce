import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="ContHome">
            <div className='ContCenter'>
                <div className="ContLanding">
                    <div className='ContInfo'>
                        <div>
                            <h1>Compra tu nuevo smartphone al mejor precio</h1>
                        </div>
                        <div>
                            <h3>Descubre los mejores dispositivos, compara especificaciones y compra al mejor precio en Compra Smartphone. Analizamos smartphones y rastreamos las tiendas más importantes para traerte las mejores ofertas a un click de distancia.</h3>
                        </div>
                        <div>
                            <Link to={'/list'}>Ir</Link>
                        </div>
                    </div>
                    <div className='ContImg'>
                        <img src="https://http2.mlstatic.com/D_NQ_NP_918849-MLA45719523826_042021-O.webp" alt="" />
                    </div>
                </div>

                <div >
                    <h2>Compra tecnología de las mejores marcas</h2>
                    <div className="Contbrands">
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Fapple.png&w=256&q=75" alt="" />
                        </div>
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Fgoogle.png&w=96&q=75" alt="" />
                        </div>
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Fsamsung.png&w=96&q=75" alt="" />
                        </div>
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Fxiaomi.png&w=96&q=75" alt="" />
                        </div>
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Foneplus.png&w=96&q=75" alt="" />
                        </div>
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Frealme.png&w=96&q=75" alt="" />
                        </div>
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Foppo.png&w=96&q=75" alt="" />
                        </div>
                        <div>
                            <img src="https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fbrands%2Fhuawei.png&w=96&q=75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        
    )
}

export default Home