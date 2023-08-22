// import { Router, Route, Routes } from 'react-router'

import Nav from './components/nav/nav';
import Home from './components/home/home';
import AnimatedHome from './components/animatedHome/animatedHome';

import './App.css';

function App() {
  return (
    <main>
      <AnimatedHome />
      <Nav />
      <Home />
    </main>
  );
}

export default App;
