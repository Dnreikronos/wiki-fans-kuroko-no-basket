import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>

        <div className="flex  felx-col items-center justify-center items-center h-[100vh] bg-backgruond-404 object-center text-5xl text-white font-projectFont ">
        
        <div className="mb-96"> 
          <Link to="/"> Go Back Home </Link>
        </div>

        </div>
      
    </>
  );
};

export default NotFoundPage;
