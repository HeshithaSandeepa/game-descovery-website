import { Input } from '@chakra-ui/react';
import { useRef } from 'react';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
    >
      <Input
        ref={inputRef}
        width={{ base: '80%', lg: '80%' }}
        borderRadius={20}
        variant={'outline'}
        placeholder="Search..."
        marginRight={5}
        borderWidth={1}
        borderColor={'gray.600'}
      />
    </form>
  );
};

export default SearchInput;
