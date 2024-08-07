import React from 'react';
import { Box, Typography } from '@mui/material';

const Result = ({ result }) => {
  if (!result) return null;

  const { weeks, dueDate } = result;

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Resultado
      </Typography>
      <Typography variant="body1">
        Semanas de gestação: {weeks}
      </Typography>
      <Typography variant="body1">
        Data prevista para o parto: {dueDate.toLocaleDateString()}
      </Typography>
    </Box>
  );
};

export default Result;
