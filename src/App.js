import './App.css';
import Headers from './core/layout/Header';
import Project from './core/components/Project';
import Login from './core/components/Login';
import { useState } from 'react';

function App() {
  const token=sessionStorage.getItem('token')
  

  if(!token){
    return(
      <Login />
    )
  }
  return (
    <div className="App">
      <Headers />
      <Project/>
    </div>
  );
}

export default App;
