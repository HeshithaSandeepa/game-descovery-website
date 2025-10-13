import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  //custom hook-same as useState
  const { games, error, loading } = useGames();

  //skeletons array
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  return (
    <>
      {/* chakra UI Text component for error message */}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap="40px"
        padding={"20px"}
      >
        {loading && skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton} />
        ))}
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