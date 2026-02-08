import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MainLayout } from "./app/layouts/MainLayout";

import { MainPage } from "./pages/main";
import { MenuPage } from "./pages/menu";
import TableReservationPage from "./pages/table-reservation";
import { ContactsPage } from "./pages/contacts";
import { InformationPage } from "./pages/information";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/table-reservation" element={<TableReservationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<InformationPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
