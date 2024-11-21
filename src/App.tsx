import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import { properties } from './data/properties';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home properties={properties} />} />
        <Route path="/property/:id" element={<PropertyDetail properties={properties} />} />
      </Routes>
    </div>
  );
}

export default App;