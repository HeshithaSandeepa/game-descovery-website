import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: PlatformSelectorProps) => {
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
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}</MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
}

export default PlatformSelector;