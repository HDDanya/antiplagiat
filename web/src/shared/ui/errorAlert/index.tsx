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
        left: 'calc((100vw - 345px) / 2 - 1px )',
      }}>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Alert
          sx={{ width: '345px' }}
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
