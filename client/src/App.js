import './App.css';

import About from './components/About';

import Projects from './components/Projects';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/Home';
import Contact from './components/Contact';




const App = () => {
  return (
    <Router>

        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        
    </Router>

  );
}


export default App;
