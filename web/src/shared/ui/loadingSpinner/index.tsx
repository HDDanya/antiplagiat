import { CircularProgress, Box } from '@mui/material';

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={20} />
    </Box>
  );
};
