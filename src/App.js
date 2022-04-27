import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import InvestPage from './pages/InvestPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/invest' element={<InvestPage />} />
        <Route path='/' exact element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
