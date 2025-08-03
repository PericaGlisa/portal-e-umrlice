import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ObituaryForm from './pages/ObituaryForm';
import GreetingForm from './pages/GreetingForm';
import FuneralAssistance from './pages/FuneralAssistance';
import CategoryAds from './pages/CategoryAds';
import AdDetails from './pages/AdDetails';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/obituary" element={<ObituaryForm />} />
          <Route path="/greeting" element={<GreetingForm />} />
          <Route path="/funeral-assistance" element={<FuneralAssistance />} />
          <Route path="/category/:categoryId" element={<CategoryAds />} />
          <Route path="/category/:categoryId/ad/:adId" element={<AdDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;