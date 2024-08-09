import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailKuroko from "./pages/DetailKuroko"
import DetailAkashi from "./pages/DetailAkashi"
import DetailKise from "./pages/DetailKise"
import DetailKagami from "./pages/DetailKagami"
import DetailAomine from "./pages/DetailAomine"
import DetailMurasakibara from "./pages/DetailMurasakibara"
import DetailMidorima from "./pages/DetailMidorima"
import '../src/index.css';

function App() {


  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/loginPage",
      element: <LoginPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/DetailKuroko",
      element: <DetailKuroko />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/DetailAkashi",
      element: <DetailAkashi />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/DetailKise",
      element: <DetailKise />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/DetailKagami",
      element: <DetailKagami />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/DetailAomine",
      element: <DetailAomine />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/DetailMurasakibara",
      element: <DetailMurasakibara />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/DetailMidorima",
      element: <DetailMidorima />,
      errorElement: <NotFoundPage />
    },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
