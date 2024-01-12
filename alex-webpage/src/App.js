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
        <Route path="/" element={<> <Nav /><AnimatedHome /><Home /></>}> </Route>
        <Route path="/profile" element={<> <Nav /> <Profile /></>}> </ Route>
        <Route path="/portfolio" element={<> <Nav /> <Portfolio /></>}> </ Route>
        <Route path="/projects" element={<> <Nav /> <Projects /> </>}> </ Route>
        <Route path="/calculator" element={<> <Nav /> <Calculator /> </>}> </ Route>
        <Route path="/timer" element={<> <Nav /> <ClockTimer /> </>}> </ Route>
        <Route path="/todoList" element={<> <Nav /> <TodoList /> </>}> </ Route>
      </Routes>
    </Router>
  );
}

export default App;
