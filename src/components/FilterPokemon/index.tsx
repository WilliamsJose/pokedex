import { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../hooks/swr';

function FilterPokemon() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { data } = useData('type');
  const navigate = useNavigate();
  const filterOptions = data?.results;

  const handleOptionChange = (event: any): void => {
    const url = event.target.value.replace(
      import.meta.env.VITE_API_BASE_URL,
      '',
    );
    navigate(url);
  };

  function handleFilterOpen() {
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <S.FilterContainer>
      {isFilterOpen && (
        <S.FilterCard>
          <S.FilterTitle>Filter by type</S.FilterTitle>
          <S.FilterSelect value={0} onChange={handleOptionChange}>
            <option value="0">Select a type</option>
            {filterOptions &&
              filterOptions.map((option: any, index: number) => (
                <option key={index} value={option.url}>
                  {option.name}
                </option>
              ))}
          </S.FilterSelect>
        </S.FilterCard>
      )}
      <S.FilterIcon size={28} onClick={handleFilterOpen} />
    </S.FilterContainer>
  );
}

export default FilterPokemon;
