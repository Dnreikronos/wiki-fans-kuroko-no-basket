import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  h-[100vh] bg-background-404 text-5xl text-white font-serif">


        <div className="mb-96"> 
          <Link to="/"> Go Back Home </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
