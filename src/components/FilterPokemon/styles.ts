import { IoFilterOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { CardDefault } from '../CardDefault/styles';
import { Title } from '../Title/styles';

export const FilterIcon = styled(IoFilterOutline)`
  color: white;
  border-radius: 50%;
  padding: 10px;
  background: linear-gradient(135deg, #3e3ea4, #70e2f8);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  transition:
    background-color 0.4s ease,
    box-shadow 0.4s ease;

  &:hover {
    background: linear-gradient(135deg, #3e3ea4, #6dbdff);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const FilterCard = styled(CardDefault)`
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  max-width: 60vw;
  background-color: white;
  padding: 15px;
`;

export const FilterTitle = styled(Title)`
  font-size: 24px;
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 10%;
  bottom: 50px;
  align-items: end;

  @media only screen and (min-width: 1024px) {
    right: 20%;
  }
`;
