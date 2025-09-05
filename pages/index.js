import Hero from '../components/Hero';
import Profile from '../components/profile';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Profile />
      <Projects />
      <Education />
      <Certifications />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
