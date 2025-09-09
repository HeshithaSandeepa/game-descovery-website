import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";


const GameGrid = () => {
  //custom hook-same as useState
  const { games, error } = useGames();


  return (
    <>
      {/* chakra UI Text component for error message */}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap="40px"
        padding={"20px"}
      >
        {
          games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))
        }
      </SimpleGrid>
    </>
  )
}

export default GameGrid