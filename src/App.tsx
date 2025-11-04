import { Box, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useEffect, useState } from "react"
import type { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import type { Platform } from "./hooks/usePlatforms"


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);


  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}
        templateColumns={{
          base: '1fr', // base (mobile) වලදී සම්පූර්ණ පළල (1 fraction)
          lg: '250px 1fr' // lg (laptop/desktop)  aside :250px, main other all width(1 fraction)
        }}
      >

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
            onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
        </GridItem>

        <GridItem area="main" paddingY={5} w={"full"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
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
