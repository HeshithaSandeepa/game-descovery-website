import { Heading, HStack } from "@chakra-ui/react";
import PulsingText from "./ui/PulsingText";

const NavBar = () => {
  return (
    <>
      <HStack padding={"20px"}>
        <Heading
          as="h1"
          fontSize={{ base: "3x1", md: "4xl" }}
          color="white"
          letterSpacing="widest"
        >
          <PulsingText />
        </Heading>
      </HStack>
    </>
  )
}

export default NavBar;