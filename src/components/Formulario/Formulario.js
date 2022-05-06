import React, { useContext } from 'react'
import './Formulario.css'
import CartContext from "../../context/CartContext"


export const Formulario = () => {

    const { UserInfo } = useContext(CartContext)

    const manejador = (e) => {
        e.preventDefault()
        const datosUser = {
            nombre : e.target.nombreUser.value, 
            apellido : e.target.apellidoUser.value,
            email : e.target.emailUser.value,
            phone : e.target.phoneUser.value,

        }
        UserInfo(datosUser)
    }

    return (
        <div className='Cont_form'>
            <form onSubmit={(e) => manejador(e)} autoComplete='off'> {/* autoComplete='off' , no me funciona */}
                <div>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' id='nombre' placeholder='Nombre' name='nombreUser'/>   
                </div>
                <div>
                    <label htmlFor='apellido'>Apellido</label>
                    <input type='text' id='apellido' placeholder='Apellido' name='apellidoUser'/>  
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Email' name='emailUser'/>  
                </div>
                <div>
                    <label htmlFor='number'>Numero</label>
                    <input type='tel' id='number' placeholder='Numero' name='phoneUser'/>  
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </div>

    )
}


export default Formulario
