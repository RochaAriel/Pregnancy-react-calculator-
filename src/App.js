import React, { useState } from 'react';
import Header from './components/header';
import HeroSection from './components/herosSection';
import CalculatorForm from './components/calculator';
import Result from './components/result';
import InfoSection from './components/infoSection';
import Footer from './components/footer';
import { Container } from '@mui/material';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);

  const calculateGestation = (dum) => {
    const dumDate = new Date(dum);
    const today = new Date();
    const diffTime = Math.abs(today - dumDate);
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    const dueDate = new Date(dumDate);
    dueDate.setDate(dueDate.getDate() + 280); // 280 dias para 40 semanas

    setResult({
      weeks: diffWeeks,
      dueDate,
    });
  };

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Container maxWidth="sm">
        <CalculatorForm calculateGestation={calculateGestation} />
        <Result result={result} />
        <InfoSection />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
