import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from './Components/Login'
import Home from './Components/Home'

const auth = getAuth(appFirebase);


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
  <>
  {usuario ? <Home correoUsuario ={usuario.email} /> : <Login/>}
  </>
  )
}

export default App
