import * as React from 'react';
import { Alert, Box, Slide } from '@mui/material';

export const ErrorAlert = (props: {
  messege: string;
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '20px',
      }}>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Alert
          sx={{ width: '300px' }}
          severity="error"
          onClose={() => {
            props.setErrMsg('');
          }}>
          {props.messege}
        </Alert>
      </Slide>
    </Box>
  );
};
