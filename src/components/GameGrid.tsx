import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames"


const GameGrid = () => {
  //custom hook-same as useState
  const { games, error } = useGames();


  return (
    <>
      {/* chakra UI Text component for error message */}
      {error && <Text>{error}</Text>}
      <ul>
        {
          games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default GameGrid