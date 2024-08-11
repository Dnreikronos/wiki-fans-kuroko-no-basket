import React from "react";
import imagem from "../../assets/kuroko-no-basket.jpg";


import Galery from "../components/Galery";

import { Container } from "@mui/material";
const HomePage = () => {

  <script src="https://cdn.tailwindcss.com"></script>;

  return (
    <>
      <div className="flex flex-col  font-projectFonts items-center h-screen bg-cover bg-center bg-no-repeat">
        
        <div className="bg-gray-50/50 " >
          <div className="text-white text-center text-4xl mt-6">
            <h1>Kuroko no Basket Wiki</h1>
          </div>

          <div className="h-[80vh] w-[150vh]   rounded-xl  bg-transparent">
          <Container maxWidth="xl">
              <Galery  />
            </Container>
          </div>
          </div>
      </div>
    </>
  );
};

export default HomePage;
