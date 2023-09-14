import { useState } from 'react'
import { Header } from './Components/Layout/Header';
import { Footer } from './Components/Layout/Footer';
import { Skills } from './Components/Skills/Skills';
import { Projects } from './Components/Projects/Projects';
import { Works } from './Components/Work/Works';
import arrowDown from './assets/arrow_down_icon.svg';
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
        <img className='icon-arrow-down' src={arrowDown} alt="arrowDown"/>
      </div>
      <div className="card">
        {/* <Projects /> */}
        <Works />
      </div>
      <Footer />
      
    </>
  )
}

export default App
