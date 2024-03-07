import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Education from './components/Education/Education';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/workExperience';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Hero/>
    <Education/>
    <Skills/>
    <WorkExperience/>
    <Projects/>
    <ContactMe/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
