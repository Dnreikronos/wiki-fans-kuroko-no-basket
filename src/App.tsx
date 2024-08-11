import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import '../src/index.css';
import RenderDetailsCharacters from "./components/RenderDetailsCharacters";

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
      path: "/RenderDetailsCharacters",
      element: <RenderDetailsCharacters />,
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
