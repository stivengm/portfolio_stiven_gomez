import { useState } from 'react'
import { Header } from './Components/Layout/Header';
import { Skills } from './Components/Skills/Skills';
import { Projects } from './Components/Projects/Projects';
import { Works } from './Components/Work/Works';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div id='landing-page' className='landing-page' style={{ height: 'calc(' + window.innerHeight +'px - 60px)' }}>
        <div className='auto-biografia'>
          <p>Desarrollador de Software con más de 5 años de experiencia, he trabajado en múltiples proyectos de desarrollo de software, incluyendo aplicaciones web, móviles. Estoy familiarizado con metodologías ágiles y prácticas de desarrollo modernas. Además, estoy comprometido con la mejora continua y la actualización constante de mis habilidades técnicas para ofrecer soluciones de alta calidad y con las últimas tecnologías disponibles.</p>
        </div>
        <Skills />
      </div>
      <div className="card">
        {/* <img src={flutter} alt="Flutter" /> */}
        {/* <Projects /> */}
        <Works />
      </div>
      
    </>
  )
}

export default App
