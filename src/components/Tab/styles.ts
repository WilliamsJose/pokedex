import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  align-items: stretch;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const TabContent = styled(TabContainer)`
  height: 100%;
  border-radius: 0;
`;

const selectedColor = 'rgb(30,190,230)';
const defaultColor = 'transparent';

export const TabItem = styled.div<{ $selected?: boolean }>`
  text-align: center;
  width: 100%;
  min-width: fit-content;
  padding: 10px 0;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 3px solid
    ${props => (props.$selected ? selectedColor : defaultColor)};
`;
