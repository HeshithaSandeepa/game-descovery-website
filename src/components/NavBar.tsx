import { Heading, HStack } from '@chakra-ui/react';
import PulsingText from './ui/PulsingText';
import SearchInput from './SearchInput';

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavbarProps) => {
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
        <SearchInput onSearch={onSearch} />
      </HStack>
    </>
  );
};

export default NavBar;
