import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      
        <Sidebar/>
        <Navbar/>
        <About />
        <Projects/>
      
    </div>

  );
}


export default App;
