import { useState } from 'react'
import { Header } from './Components/Header';
import './App.css'
import { version } from '../package.json';

function App() {
  console.log(version);
  return (
    <>
      <Header />
      <div className="card">
        {version}
      </div>
      
    </>
  )
}

export default App
