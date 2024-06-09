import * as React from 'react';
import { Button, SvgIcon, SvgIconTypeMap, styled } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { LoadingSpinner } from '../loadingSpinner';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export type buttonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
interface ButtonProps {
  text: string;
  color: buttonColor;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  acceptableFile: string;
  file: FileList | null;
  setFile: React.Dispatch<React.SetStateAction<FileList | null>>;
  isLoading: boolean;
}

export const UploadButton: React.FC<ButtonProps> = ({ ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    props.setFile(files);
  };
  let content;
  if (props.isLoading) {
    content = <LoadingSpinner />;
  } else {
    content =
      props.file && props.file.length
        ? props.file[0]?.name.length > 14
          ? props.file.item(0)?.name.slice(0, 25) + '...'
          : props.file.item(0)?.name
        : props.text;
  }

  return (
    <Button
      sx={{ height: '30px', justifyContent: 'flex-start' }}
      fullWidth={true}
      component="label"
      role={undefined}
      color={props.color}
      tabIndex={-1}>
      <SvgIcon
        sx={{ fontSize: 30, marginRight: '0.5rem' }}
        component={props.icon}
      />
      {content}
      <VisuallyHiddenInput
        type="file"
        accept={props.acceptableFile}
        onChange={handleChange}
      />
    </Button>
  );
};
