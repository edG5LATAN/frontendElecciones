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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registrar />} />
        <Route path='/about' element={<About />} />
        <Route path='/vote' element={<Votar />} />
        <Route path='/count' element={<Partidos />} />
       </Routes>
       <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
