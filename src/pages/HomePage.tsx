import Galery from "../components/Galery";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col  font-projectFonts justify-center items-center h-screen w-screen bg-cover bg-center overflow-y-scroll no-scrollbar bg-no-repeat">
        <div className="text-white text-center text-4xl mt-6">
          <h1>Kuroko no Basket Wiki</h1>
        </div>
        <div className="bg-gray-50/50 ">
          <div className="   rounded-xl  bg-transparent">
            <Galery />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
