import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import WhyManovaPage from './pages/WhyManova';
import HowItWorksPage from './pages/HowItWorksPage';
import HumanModelPage from './pages/HumanModel';
import SafetyPage from './pages/Safety';
import PrivacyPage from './pages/Privacy';
import PhilosophyPage from './pages/Philosophy';
import AboutPage from './pages/About';
import DownloadPage from './pages/Download';
import NotFoundPage from './pages/NotFound';

// Manova's product experience (chat, check-ins, dashboards) lives only on
// iOS and Android. This site is marketing-only — see Sprint 10 spec.
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-manova" element={<WhyManovaPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/human-model" element={<HumanModelPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
