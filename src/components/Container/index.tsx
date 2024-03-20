import { ReactNode } from 'react';
import * as S from './styles';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children, ...restProps }: ContainerProps) => (
  <S.Container {...restProps}>{children}</S.Container>
);

export default Container;
