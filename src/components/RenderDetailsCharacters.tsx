import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
const RenderDetailsCharacters = () => {
  const location = useLocation();
  const { character } = location.state || {};
  return (
    <div className="flex flex-col  font-projectFonts items-center h-screen bg-cover bg-center bg-no-repeat">
      <div className="mb-20"></div>
      <div className="bg-gray-50/50 ">
        <div className="h-[80vh] w-[150vh]   rounded-xl  bg-transparent">
          <Container className="text-white text-center  mt-6" maxWidth="xl">
            <h1>Name: {character.name}</h1>
            <h1>Age: {character.age}</h1>
            <h1>Height: {character.height}</h1>
            <h1>Abilities: {character.abilities}</h1>
            <h1>Team: {character.team}</h1>
            <h1>Coach: {character.coach}</h1>
            <h1>Gender: {character.gender}</h1>
            <h1>Weight: {character.weight}</h1>
            <h1>Description: {character.description}</h1>
            <div className="items-center justify-center flex flex-col size-full">
              <img src={character.gif}></img>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
{
  /* <h1>{character.name}</h1>
      <h1>Teste</h1 */
}
export default RenderDetailsCharacters;
