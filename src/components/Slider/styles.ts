import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 80%;
  height: 4px;
  margin-top: 10px;
  background-color: #ccc;
  border-radius: 2px;
`;

export const SliderValue = styled.div<{ $fillColor: string; $value: number }>`
  height: 100%;
  background-color: var(--color-${props => props.$fillColor});
  border-radius: 2px;
  width: ${props => props.$value}%;
`;
