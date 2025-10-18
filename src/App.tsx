import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useEffect, useState } from "react"
import type { Genre } from "./hooks/useGenre"


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  useEffect(() => {
    console.log('====================================');
    console.log('selectedGenre', selectedGenre);
    console.log('====================================');
  }, [selectedGenre]);
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}>

        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem area="aside" display={{ base: "none", lg: 'block' }} paddingX={5}>
          <GenreList
            onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)} />
        </GridItem>

        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>


        <GridItem area="footer" bg="pink">
          Footer
        </GridItem>
      </Grid >
    </>
  )
}

export default App
