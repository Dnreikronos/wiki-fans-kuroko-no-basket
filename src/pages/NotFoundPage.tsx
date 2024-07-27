import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-2 gap2">
        404 not found
        <Link to="/"> Home </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
