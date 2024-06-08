import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  
} from '@mui/material';
import botLogo from 'assets/botLogo.jpg';
export const FileCard = (props: { buttons: React.ReactNode }) => {

  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto', marginTop: '10rem' }}>
      <CardMedia sx={{ height: 300 }} image={botLogo} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Антиплагиат
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Для того, чтобы наше приложение помогло вам загрузите вашу работу в формате docx и отчет антиплагиата в пдф
        </Typography>
      </CardContent>
      <CardActions>{props.buttons}</CardActions>
    </Card>
  );
};
