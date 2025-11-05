import { Input } from '@chakra-ui/react';

const SearchInput = () => {
  return (
    <Input
      width={{ base: '50%', lg: '30%' }}
      borderRadius={20}
      variant={'outline'}
      placeholder="Search..."
      marginRight={5}
      borderWidth={1}
      borderColor={'gray.600'}
    />
  );
};

export default SearchInput;
