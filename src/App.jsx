import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuthGatewayModal from './components/AuthGatewayModal';
import ForexTradingView from './components/ForexTradingView';
import TechAcademyPortal from './components/TechAcademy/TechAcademyPortal';
import K12ScholarsView from './components/K12ScholarsView';
import ProjectsView from './components/ProjectsView';
import { getCurrentUser } from './api';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem('nexa_user');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(!currentUser);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'forex-trading' | 'fullstack-dev' | 'k12-scholars' | 'projects'

  // Verify active JWT session with backend /api/auth/me on mount
  useEffect(() => {
    const verifySession = async () => {
      const token = localStorage.getItem('nexa_token');
      const storedUserStr = localStorage.getItem('nexa_user');

      // If user is guest scholar, maintain guest session without backend verification
      if (!token) {
        if (storedUserStr) {
          try {
            const parsed = JSON.parse(storedUserStr);
            if (parsed.isGuest) {
              return;
            }
          } catch (e) {
            // invalid JSON, clean up
          }
        }
        // No valid session, clear and prompt auth modal
        localStorage.removeItem('nexa_user');
        setCurrentUser(null);
        setIsAuthModalOpen(true);
        return;
      }

      // Verify token with backend GET /api/auth/me
      try {
        const data = await getCurrentUser(token);
        if (data && data.user) {
          const verifiedUser = {
            ...data.user,
            token
          };
          setCurrentUser(verifiedUser);
          localStorage.setItem('nexa_user', JSON.stringify(verifiedUser));
          setIsAuthModalOpen(false);
        } else {
          throw new Error('Invalid user payload');
        }
      } catch (err) {
        // Token expired or invalid - purge session and open auth gateway
        console.warn('Session verification failed:', err.message);
        localStorage.removeItem('nexa_token');
        localStorage.removeItem('nexa_user');
        setCurrentUser(null);
        setIsAuthModalOpen(true);
      }
    };

    verifySession();
  }, []);

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('nexa_token');
    localStorage.removeItem('nexa_user');
    setCurrentUser(null);
    setCurrentView('home');
    setIsAuthModalOpen(true);
  };

  const handleNavigateView = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-[#f39228] selection:text-dark-950">
      <Navbar 
        currentView={currentView}
        onNavigateView={handleNavigateView}
        currentUser={currentUser}
        onSignOut={handleSignOut}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      <main className="flex-1">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <AboutSection onNavigateView={handleNavigateView} />
            <ProjectsSection />
            <ContactSection />
          </div>
        )}

        {/* VIEW 2: FOREX SMC TRADING (ISOLATED) */}
        {currentView === 'forex-trading' && (
          <div className="animate-fade-in">
            <ForexTradingView 
              onBackToHome={() => handleNavigateView('home')}
            />
          </div>
        )}

        {/* VIEW 3: FULL-STACK WEB DEV ACADEMY (ISOLATED) */}
        {currentView === 'fullstack-dev' && (
          <div className="animate-fade-in">
            <TechAcademyPortal 
              onBackToHome={() => handleNavigateView('home')}
            />
          </div>
        )}

        {/* VIEW 4: K-12 SCHOLARS TUTORING (ISOLATED) */}
        {currentView === 'k12-scholars' && (
          <div className="animate-fade-in">
            <K12ScholarsView 
              onBackToHome={() => handleNavigateView('home')}
            />
          </div>
        )}

        {/* VIEW 5: WEB LAB & PRODUCTION CLONES (ISOLATED) */}
        {currentView === 'projects' && (
          <div className="animate-fade-in">
            <ProjectsView 
              onBackToHome={() => handleNavigateView('home')}
            />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigateView} />

      {/* Evangadi-Style Authentication Gateway Modal */}
      <AuthGatewayModal 
        isOpen={isAuthModalOpen}
        onClose={currentUser ? () => setIsAuthModalOpen(false) : null}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}
