import { Box, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import type { Genre } from "./hooks/useGenre"


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);


  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}>

        <GridItem
          area="nav"
          position={"sticky"}
          top={0}
          zIndex={1}
          bg={"black"}>
          <NavBar />
        </GridItem>

        <GridItem
          area="aside"
          display={{ base: "none", lg: 'block' }}
          paddingX={5}
          top={0}
          height={"85vh"}
          overflowY={"auto"}
          css={{
            //hide scrollbar
            "&::-webkit-scrollbar": {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <GenreList
            onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)} />
        </GridItem>

        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>


        <GridItem area="footer" bg="brown" w={"full"}>
          <Box w={"full"} textAlign={"center"} p={4}>
            Footer
          </Box>

        </GridItem>
      </Grid >
    </>
  )
}

export default App
