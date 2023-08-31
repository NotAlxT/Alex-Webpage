import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure to import from 'react-router-dom'
import Nav from './components/nav/nav';
import Home from './components/home/home';
import AnimatedHome from './components/animatedHome/animatedHome';

import './App.css';
import Profile from './components/profile/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <Nav /><AnimatedHome /><Home /></>}> </Route>
        <Route path='/profile' element={<> <Nav /> <Profile /></>} />
      </Routes>
    </Router>
  );
}

export default App;
