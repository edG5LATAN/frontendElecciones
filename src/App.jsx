import { useState } from 'react'
import Home from './components/home/Home'
import Registrar from './components/registrarse/Registrar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registrase' element={<Registrar />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
