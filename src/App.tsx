import './App.css'
import Equipe from './components/Equipe/Equipe'
import Funcoes from './components/Funcoes/Funcoes'
import Hero from './components/Hero/Hero'
import Navbar from './components/NavBar/Navbar'
import Sobre from './components/Sobre/Sobre'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Funcoes />
      <Equipe />
    </>
  )
}

export default App