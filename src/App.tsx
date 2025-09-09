import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"


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

        <GridItem area="aside" bg="green" display={{ base: "none", lg: 'block' }}>
          Sidebar
        </GridItem>

        <GridItem area="main" bg="purple">
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
