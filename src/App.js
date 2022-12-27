import './App.css';
import AboutMe from './components/AboutMe';
import CodingJourney from './components/CodingJourney';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <main className='bg-slate-900 text-sky-600'>
      <NavBar />
      <AboutMe />
      <CodingJourney />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
