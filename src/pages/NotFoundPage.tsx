
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>

        <div className="bg-backgruond-404 h-screen bg-no-repeat bg-cover   ">
        
        <div className="font-projectFont text-5xl flex  felx-col   justify-center items-center text-white"> 
          <Link to="/"> Go Back Home </Link>
        </div>

        </div>
      
    </>
  );
};

export default NotFoundPage;
