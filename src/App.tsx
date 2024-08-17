import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import '../src/index.css';
import RenderDetailsCharacters from "./components/RenderDetailsCharacters";

function App() {


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
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
