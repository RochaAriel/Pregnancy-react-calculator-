import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const CalculatorForm = ({ calculateGestation }) => {
  const [dum, setDum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateGestation(dum);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Data da Última Menstruação (DUM)"
        type="date"
        value={dum}
        onChange={(e) => setDum(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Calcular
      </Button>
    </Box>
  );
};

export default CalculatorForm;
