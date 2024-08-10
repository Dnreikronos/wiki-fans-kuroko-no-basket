import React from "react";
import imagem from "../../assets/kuroko-no-basket.jpg";
import axios from 'axios'
import Characters from "../components/Characters";
import { useEffect , useState} from "react";
const HomePage = () => {


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

  return (
    <>
      <div className="flex flex-col  font-projectFonts items-center h-[110vh] bg-background-kuroko scale-100">
        
        <div className="text-white text-4xl mt-6">
          <h1>Kuroko no Basket Wiki</h1>
        </div>
        
        <div className="h-[80vh] w-[150vh] mt-5 rounded-xl bg-transparent">
         <Characters/>
        </div>

      </div>
    </>
  );
};

export default HomePage;
