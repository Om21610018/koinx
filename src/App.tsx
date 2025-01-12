import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CoinPage } from './pages/CoinPage';
import { Header } from './components/Header';

// Simple component for navigation pages
const NavigationPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>
        <p className="text-gray-600">This feature is currently under development.</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navigation routes */}
        <Route path="/crypto-taxes" element={<NavigationPage />} />
        <Route path="/free-tools" element={<NavigationPage />} />
        <Route path="/resource-center" element={<NavigationPage />} />
        
        {/* Cryptocurrency routes */}
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/" element={<Navigate to="/coin/bitcoin" replace />} />
        <Route path="*" element={<Navigate to="/coin/bitcoin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;