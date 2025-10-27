import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant={"outline"} size="sm" fontWeight={"bold"}>Platforms Selector</Button>
        </MenuTrigger>
        <MenuContent width={{ base: "70%", md: "50%", lg: "20%" }} overflow="auto" position={"absolute"}>
          {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.slug}>{platform.name}</MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
}

export default PlatformSelector;