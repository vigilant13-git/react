import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import appFirebase from '../credenciales'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    <div>
        <h2>Bienvenido: {correoUsuario} <button className='btn btn-primary' onClick={()=>signOut(auth)} >Logout</button></h2>
    </div>
  )
}

export default Home