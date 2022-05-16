import React, { useContext } from 'react'
import './Formulario.css'
// import CartContext from "../../context/CartContext"
import UserContext from '../../context/UserContext'


export const Formulario = () => {

    // const { UserInfo } = useContext(CartContext)
    const { UserInfo }  = useContext(UserContext)

    const manejador = e => {
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
        <>
            <form className='form' onSubmit={manejador} autoComplete='off'> {/* autoComplete='off' , no me funciona */}
                <h2 className='form_tittle'>Inicia Sesión</h2>
                <div className='form_cont'>
                    <div className='form_group'>
                        <input type='text' id='nombre' placeholder=' ' name='nombreUser' className='form_input'/>   
                        <label htmlFor='nombre' className='form_label'>Nombre:</label>
                        <span className='form_line'></span>
                    </div>
                    <div className='form_group'>
                        <input type='text' id='apellido' placeholder=' ' name='apellidoUser' className='form_input'/>  
                        <label htmlFor='apellido' className='form_label'>Apellido:</label>
                        <span className='form_line'></span>
                    </div>
                    <div className='form_group'>
                        <input type='email' id='email' placeholder=' ' name='emailUser' className='form_input'/>  
                        <label htmlFor='email' className='form_label'>Email:</label>
                        <span className='form_line'></span>
                    </div>
                    <div className='form_group'>
                        <input type='tel' id='number' placeholder=' ' name='phoneUser' className='form_input'/>  
                        <label htmlFor='number' className='form_label'>Numero:</label>
                        <span className='form_line'></span>
                    </div>
                    <button className='form_submit'>Enviar</button> {/* el ultimo boton de un form hace el submit de manera automatica sin necesidad de indicarle */}
                </div>
            </form>
        </>
    )
}


export default Formulario
