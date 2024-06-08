import * as React from 'react';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { Box, Button } from '@mui/material';
import { UploadButton } from 'shared/ui';
import { useUploadFilesMutation } from 'entities/fileCard';

export const UploadFiles = () => {
  const [pdf, setPdf] = React.useState<FileList | null>(null);
  const [doc, setDoc] = React.useState<FileList | null>(null);
  const [uploadFiles] = useUploadFilesMutation();

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      if (pdf && doc) {
        console.log(pdf[0]);
        console.log(doc[0]);
        formData.append('pdf_file', pdf[0]);
        formData.append('word_file', doc[0]);
        const files = await uploadFiles(formData).unwrap();
        console.log(files);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
      <UploadButton
        key={1}
        acceptableFile=".pdf"
        text="ЗАГРУЗИТЬ ОТЧЕТ"
        color="error"
        icon={PictureAsPdfOutlinedIcon}
        file={pdf}
        setFile={setPdf}
      />
      <UploadButton
        key={2}
        acceptableFile=".doc,.docx"
        text="ЗАГРУЗИТЬ РАБОТУ"
        color="primary"
        icon={TextSnippetOutlinedIcon}
        file={doc}
        setFile={setDoc}
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        color="error"
        variant="contained">
        {' '}
        Отправить
      </Button>
    </Box>
  );
};
