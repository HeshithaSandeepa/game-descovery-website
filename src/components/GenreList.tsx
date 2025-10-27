// for side panel  ex: youtube genre list

import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { type Genre } from "../hooks/useGenre";
import cropImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: GenreListProps) => {
  const { data, loading, error } = useGenre();

  if (error) return null;
  if (loading) return <Spinner />
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
            <Button
              fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={g.id === selectedGenre?.id ? "xl" : "medium"}
              onClick={
                () => { onSelectedGenre(g) }}
              variant={"ghost"} >{g.name}</Button>
          </HStack>

        </ListItem>
      ))
      }
    </List.Root>
  )
}

export default GenreList;