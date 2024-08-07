import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#3f51b5', color: '#fff' }}>
      <Typography variant="body1">
        © 2024 Calculadora Gestacional. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
