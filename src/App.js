import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <main className='bg-gradient-to-br from-slate-900 to-teal-900 text-sky-600 overflow-x-hidden'>
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
