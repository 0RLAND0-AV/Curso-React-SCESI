// src\layouts\MainLayout.tsx
import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer'; 
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
// import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};