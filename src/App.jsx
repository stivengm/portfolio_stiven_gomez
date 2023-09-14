import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Header } from './Components/Layout/Header';
import { Footer } from './Components/Layout/Footer';
import { Loader } from './Components/Loader/Loader';
import { ContactMe } from './Components/Contact/Contact';
import { Skills } from './Components/Skills/Skills';
import { Projects } from './Components/Projects/Projects';
import { Works } from './Components/Work/Works';

import './App.css';

function App() {

  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    axios.get('https://portfolio-51fbb-default-rtdb.firebaseio.com/profile.json')
      .then((response) => {
        setData(response.data);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      })
      .catch((error) => {
        throw error;
      });
  }, [setData]);

  return (
    <>
      {
        isLoading ? <Loader /> :
          <>
            <Header name={data.name} logo={data.config.logo} />
              <div id='landing-page' className='landing-page' style={{ height: 'calc(' + window.innerHeight + 'px - 60px)' }}>
                <div className='auto-biografia'>
                  <h1>{data.profession}</h1>
                  <p>{data.description}</p>
                </div>
                <Skills skills={data.skills} />
                <img className='icon-arrow-down' src={data.config.arrow_icon} alt="arrowDown" />
              </div>
              <div className="card">
                <ContactMe contact={data.contact} />
                  {/* <Projects /> */}
                  <Works works={data.works} />
              </div>
              <Footer />
          </>

      }
    </>
  )
}

export default App
