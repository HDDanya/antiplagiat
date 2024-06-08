import { FileCard } from 'entities/fileCard';
import { UploadFiles } from 'features/fileActions';

export const MainPage = () => {
  return <FileCard buttons={<UploadFiles />} />;
};
