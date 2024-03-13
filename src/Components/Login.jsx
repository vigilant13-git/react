import React from 'react'
import login from '../assets/Login.png'
import usuario from '../assets/Usuario.png'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

const auth= getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)
    const funtAutenticacion = async(event) =>{
        event.preventDefault();
        const correo = event.target.email.value;
        const contrasena = event.target.password.value;
    
        if(registrando){
            try {
                await createUserWithEmailAndPassword(auth, correo, contrasena)
            } catch (error) {
                alert ("Usuario o contraseña no cumple con los criterios minimos")
            }
            
        }
        else{
            try {
                await signInWithEmailAndPassword(auth, correo, contrasena)
            } catch (error) {
                alert (" Usuario o contraseña es incorrecto")
            }
            
        }

    }

    return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-4">
                <div className='padre'>
                    <div className="card card-body shadow-lg ">
                        <img src={usuario} alt="" className='estilo-profile' />
                        <form onSubmit={funtAutenticacion}>
                            <input type="text" placeholder='Ingresa email' className='caja-texto' id='email'/>
                            <input type="password" placeholder='Ingresa Contraseña' className='caja-texto' id='password' />
                            <button className='btnform' >{registrando ? "Registrate" : "Iniciar sesión"}</button>
                        </form>
                        <h4 className='texto' >{registrando ? "Si ya tienes cuenta:": "No tienes cuenta:"} <button className='btn-switch'  onClick={()=> setRegistrando(!registrando)} >{registrando ? "Iniciar sesión" : "Registrate"}</button></h4>
                    </div>

                </div>

            </div>
            <div className="col-md-8">
                <img src={login} alt="" className='tamano-imagen' />
            </div>


        </div>
    </div>
  )
}

export default Login