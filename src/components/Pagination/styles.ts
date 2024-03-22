import styled from 'styled-components';
import { Button } from '../Button/styles';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  height: 60px;
  background-color: inherit;
  font-size: 18px;
  place-items: center;
  color: black;
`;

export const PaginationButton = styled(Button)`
  background-color: inherit;
  border: none;
  color: black;
  width: 60px;
  height: 60px;
  padding: 5px;
  text-align: center;
  transition: color 0.4s ease;
  &:hover {
    color: red;
  }
`;

export const PaginationItem = styled.span`
  width: 30px;
  text-align: center;
  padding: 5px;
`;

export const PaginationDots = styled(HiOutlineDotsHorizontal)`
  height: 14px;
  width: 14px;
`;
