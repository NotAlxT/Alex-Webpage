import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure to import from 'react-router-dom'
import Nav from './components/nav/nav';
import Home from './components/home/home';
import AnimatedHome from './components/animatedHome/animatedHome';

import './App.css';
import Profile from './components/profile/profile';
import Portfolio from './components/portfolio/portfolio';
import Projects from './components/projects/projects'
import Calculator from './components/projects/calculator/calculator';
import ClockTimer from './components/projects/timer/timer';
import TodoList from './components/projects/todoList/todoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <Home /></>}> </Route>
        <Route path="/profile" element={<> <Profile /></>}> </ Route>
        <Route path="/portfolio" element={<>  <Portfolio /></>}> </ Route>
        <Route path="/projects" element={<> <Projects /> </>}> </ Route>
        <Route path="/calculator" element={<>  <Calculator /> </>}> </ Route>
        <Route path="/timer" element={<> <ClockTimer /> </>}> </ Route>
        <Route path="/todoList" element={<>  <TodoList /> </>}> </ Route>
      </Routes>
    </Router>
  );
}

export default App;
