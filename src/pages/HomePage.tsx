import React from "react";
import imagem from "../../assets/kuroko-no-basket.jpg";
import axios from "axios";
import Characters from "../components/Characters";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
const HomePage = () => {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/")
      .then((res) => {
        console.log(res.data);
        setCharacterList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  <script src="https://cdn.tailwindcss.com"></script>;

  return (
    <>
      <div className="flex flex-col  font-projectFonts items-center h-screen bg-cover bg-center bg-no-repeat">
        
        <div className="bg-gray-50/50 " >
          <div className="text-white text-center text-4xl mt-6">
            <h1>Kuroko no Basket Wiki</h1>
          </div>

          <div className="h-[80vh] w-[150vh]  mt-5 rounded-xl  bg-transparent">
            <Characters />
          </div>
          </div>
      </div>
    </>
  );
};

export default HomePage;
