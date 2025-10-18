// for side panel  ex: youtube genre list

import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import cropImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <List.Root listStyle={"none"}>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={cropImageUrl(g.image_background)}
              borderRadius={8}
            />
            <Text
              fontSize={"lg"}
            >{g.name}</Text>
          </HStack>

        </ListItem>
      ))
      }
    </List.Root>
  )
}

export default GenreList;