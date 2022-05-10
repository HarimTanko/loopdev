import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import InvestPage from './pages/InvestPage';
import DevelopmentsPage from './pages/DevelopmentsPage';
import LettingsPage from './pages/LettingsPage';
import SingleDevelopment from './pages/SingleDevelopment';
import SingleLetting from './pages/SingleLetting';
import ConstructionPage from './pages/ConstructionPage';
import SingleConstruction from './pages/SingleConstruction';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

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
        <Route path='/developments' element={<DevelopmentsPage />} />
        <Route path='/developments/:id' element={<SingleDevelopment />} />
        <Route path='/lettings' element={<LettingsPage />} />
        <Route path='/lettings/:id' element={<SingleLetting />} />
        <Route path='/construction/' element={<ConstructionPage />} />
        <Route path='/construction/:id' element={<SingleConstruction />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' exact element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
