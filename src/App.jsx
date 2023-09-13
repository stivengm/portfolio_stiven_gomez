import { useState } from 'react'
import { Header } from './Components/Header';
import './App.css'
import { version } from '../package.json';

import flutter from './assets/flutter_icon.svg';

function App() {
  console.log(version);
  return (
    <>
      <Header />
      <p>Desarrollador de Software con más de 5 años de experiencia, he trabajado en múltiples proyectos de desarrollo de software, incluyendo aplicaciones web, móviles. Poseo habilidades en lenguajes de programación como Flutter, Angular, NodeJs, ReactJs y WebPack incluyendo despliegues en tiendas de aplicaciones tales como GooglePlay y AppStore. Estoy familiarizado con metodologías ágiles y prácticas de desarrollo modernas. Además, estoy comprometido con la mejora continua y la actualización constante de mis habilidades técnicas para ofrecer soluciones de alta calidad y con las últimas tecnologías disponibles.</p>
      <div className="card">
        {version}
        <img src={flutter} alt="Flutter" />
      </div>
      
    </>
  )
}

export default App
