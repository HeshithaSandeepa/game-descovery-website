import { Heading, HStack } from '@chakra-ui/react';
import PulsingText from './ui/PulsingText';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <>
      <HStack
        padding={'20px'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Heading
          as="h1"
          fontSize={{ base: '3x1', md: '4xl' }}
          color="white"
          letterSpacing="widest"
        >
          <PulsingText />
        </Heading>
        <SearchInput />
      </HStack>
    </>
  );
};

export default NavBar;
