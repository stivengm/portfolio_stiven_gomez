import { useState } from 'react'
import { Header } from './Components/Header';
import { Skills } from './Components/Skills/Skills';
import { Projects } from './Components/Projects';
import { Works } from './Components/Works';
import './App.css'
import { version } from '../package.json';

import flutter from './assets/flutter_icon.svg';

function App() {
  console.log(version);
  return (
    <>
      <Header />
      <div className='auto-biografia'>
        <p>Desarrollador de Software con más de 5 años de experiencia, he trabajado en múltiples proyectos de desarrollo de software, incluyendo aplicaciones web, móviles. Estoy familiarizado con metodologías ágiles y prácticas de desarrollo modernas. Además, estoy comprometido con la mejora continua y la actualización constante de mis habilidades técnicas para ofrecer soluciones de alta calidad y con las últimas tecnologías disponibles.</p>
      </div>

      <div className="card">
        <Skills />
        {/* <img src={flutter} alt="Flutter" /> */}
        {/* <Projects /> */}
        <Works />
      </div>
      
    </>
  )
}

export default App
