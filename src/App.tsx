import { Grid, GridItem } from "@chakra-ui/react"


function App() {
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}>

        <GridItem area="nav" bg="red">
          nav bar
        </GridItem>

        <GridItem area="aside" bg="green" display={{ base: "none", lg: 'block' }}>
          Sidebar
        </GridItem>

        <GridItem area="main" bg="purple">
          Main
        </GridItem>


        <GridItem area="footer" bg="pink">
          Footer
        </GridItem>
      </Grid >
    </>
  )
}

export default App
