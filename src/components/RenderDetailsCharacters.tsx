import { useLocation } from "react-router-dom";
const RenderDetailsCharacters = () => {
  const location = useLocation();
  const { character } = location.state || {};
  return (
    <div>
      <h1>{character.name}</h1>
      <h1>Teste</h1>
    </div>
  );
};

export default RenderDetailsCharacters;
