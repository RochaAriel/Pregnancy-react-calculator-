import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoSection = () => {
  return (
    <Box sx={{ padding: '50px 20px', backgroundColor: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Deu positivo, e agora?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Consulte uma obstetra, faça exames recomendados e comece a tomar ácido fólico.
      </Typography>
      {/* Adicione mais informações conforme necessário */}
    </Box>
  );
};

export default InfoSection;
