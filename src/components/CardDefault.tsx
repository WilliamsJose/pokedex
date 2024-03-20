import styled from 'styled-components';

const CardDefault = styled.div<{ $bgColor?: string }>`
  background-color: var(--color-${props => props.$bgColor || 'normal'});
  width: 100%;
  max-width: 14rem;
  min-width: fit-content;
  height: 10rem;
  border-radius: 15px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export default CardDefault;
