import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

import { HStack, Icon } from '@chakra-ui/react'
import { type Platform } from '../hooks/useGames'
import type { IconType } from 'react-icons';


interface PlatformIconProps {
  platforms: Platform[];
}
const PlatformIconsList = ({ platforms }: PlatformIconProps) => {
  // ic on type define =  Record<string, ComponentType<IconBaseProps>>
  const iconsMap: { [key: string]: IconType } = {
    //key:sting
    pc: FaWindows,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    xbox: FaXbox,
    xbox360: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe
  }
  return (
    // <HStack gap={2}>
    //   {platforms.map((platform) => (
    //     <>
    //       {Object.entries(iconsMap).map(([key, Icon]) =>
    //         platform.slug === key ? <Icon key={key} /> : null
    //       )}
    //     </>
    //   ))}
    // </HStack>
    <HStack gap={2}>
      {platforms.map((platform) => {
        const IconComponent = iconsMap[platform.slug];
        return IconComponent ? <Icon key={platform.id} as={IconComponent} /> : null;
      })}
    </HStack>
  );
}

export default PlatformIconsList;