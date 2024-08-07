import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h3" gutterBottom>
        Bem-vinda à Calculadora Gestacional
      </Typography>
      <Typography variant="h6" gutterBottom>
        Calcule a data prevista para o nascimento do seu bebê.
      </Typography>
      <Button variant="contained" color="primary">
        Começar
      </Button>
    </Box>
  );
};

export default HeroSection;
