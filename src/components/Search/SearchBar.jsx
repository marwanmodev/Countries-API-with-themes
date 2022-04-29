import tw, { styled, theme } from 'twin.macro';
import { useContext } from 'react';
import { ImSearch } from 'react-icons/im';
import SearchContext from '../../context/SearchContext';

const SearchBar = () => {
  const { searchedName, setSearchedName } = useContext(SearchContext);

  return (
    <Wrapper>
      <Icon>
        <ImSearch />
      </Icon>
      <Input
        placeholder='Search for a country...'
        value={searchedName}
        onChange={e => setSearchedName(e.target.value)}
      />
    </Wrapper>
  );
};

const Icon = styled.div`
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  ${tw`w-full outline-none cursor-auto`}
  background: ${({ theme }) => theme.elem};
  &::placeholder {
    color: ${({ theme }) => theme.text};
    font-size: ${theme`fontSize.h3`};
  }
`;
const Wrapper = styled.div`
  ${tw`px-md rounded-md max-w-full w-[450px] mob:w-full py-sm flex items-center gap-sm`}
  background: ${({ theme }) => theme.elem};
`;

export default SearchBar;
