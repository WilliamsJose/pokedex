import styled from 'styled-components';

export const CardDefault = styled.div<{ $bgColor?: string }>`
  background-color: var(--color-${props => props.$bgColor || 'normal'});
  width: 100%;
  max-width: 14rem;
  height: 10rem;
  border-radius: 15px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
