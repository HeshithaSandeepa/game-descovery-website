import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"


function App() {
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
          <GenreList />
        </GridItem>

        <GridItem area="main">
          <GameGrid />
        </GridItem>


        <GridItem area="footer" bg="pink">
          Footer
        </GridItem>
      </Grid >
    </>
  )
}

export default App
