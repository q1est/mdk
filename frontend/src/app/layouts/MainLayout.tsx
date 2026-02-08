import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header style={{ padding: 20, borderBottom: "1px solid #eee" }}>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link to="/">Главная</Link>
          <Link to="/menu">Меню</Link>
          <Link to="/table-reservation">Бронирование</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/about">О ресторане</Link>
        </nav>
      </header>

      <main style={{ padding: 24 }}>
        <Outlet />
      </main>MainLayout.tsx
    </>
  );
};
