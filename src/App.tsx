import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/next";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppShell: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

function App() {
  // Using HashRouter to ensure compatibility in environments without server-side routing config
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground transition-colors duration-300">
          <Router>
            <ScrollToTop />
            <AppShell />
          </Router>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;