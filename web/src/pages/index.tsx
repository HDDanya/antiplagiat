import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Main.tsx';
import { LayoutApp } from './Layout';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
