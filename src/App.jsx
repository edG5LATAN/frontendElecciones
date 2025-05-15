import { useState } from 'react'
import Home from './components/home/Home'
import Registrar from './components/registrarse/Registrar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Votar from './components/votos/Votar'
import Partidos from './components/partidos/Partidos'
import { ProtectedRoutes } from './components/protected/ProtectedRoutes'
import { Datos } from './contexto/Contexto'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Datos>
     <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Registrar />} />
        <Route element={<ProtectedRoutes />}>
         <Route path='/vote' element={<Votar />} />
         <Route path='/count' element={<Partidos />} />
        </Route>
       </Routes>
       </Datos>
       <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
