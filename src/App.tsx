import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailCharacterPage from "./pages/DetailCharacterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import '../src/index.css';
import axios from 'axios';
import AxiosInstance from "./helper/axios-instace"

function App() {
  const [characterList, setCharacterList] = useState([])
  useEffect(() => {
    axios.
    get('http://localhost:9000/')
    .then((res) => {
      console.log(res.data)
      setCharacterList(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

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
      path: "/detailCharacterPage",
      element : <DetailCharacterPage />,
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
