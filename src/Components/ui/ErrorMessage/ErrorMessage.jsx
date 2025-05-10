import React from 'react';
import { Box, Typography } from '@mui/material';

function ErrorMessage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="20rem"
    >
      <Typography variant="h5" color="#FF9B9B">Аn error has occurred - refresh the page</Typography>
    </Box>
  );
}

export default ErrorMessage;
