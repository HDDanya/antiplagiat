import { CircularProgress, Box } from '@mui/material';

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress sx={{ color: '#FFFFFF' }} size={20} />
    </Box>
  );
};
