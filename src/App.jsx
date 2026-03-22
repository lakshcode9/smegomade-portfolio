import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WorkFeed from './components/WorkFeed';
import BrandingProjects from './components/BrandingProjects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__content">
        <Hero />
        <AboutSection />
        <WorkFeed />
        <BrandingProjects />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
