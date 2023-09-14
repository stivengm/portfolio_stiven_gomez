import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Header } from './Components/Layout/Header';
import { Footer } from './Components/Layout/Footer';
import { Skills } from './Components/Skills/Skills';
import { Projects } from './Components/Projects/Projects';
import { Works } from './Components/Work/Works';
import arrowDown from './assets/arrow_down_icon.svg';

import './App.css';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://portfolio-51fbb-default-rtdb.firebaseio.com/profile.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [setData]);

  return (
    <>
      <Header name={data.name} />
      <div id='landing-page' className='landing-page' style={{ height: 'calc(' + window.innerHeight +'px - 60px)' }}>
        <div className='auto-biografia'>
          <h1>{data.profession}</h1>
          <p>{data.description}</p>
        </div>
        <Skills skills={data.skills} />
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
