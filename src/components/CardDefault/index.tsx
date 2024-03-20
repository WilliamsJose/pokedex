import { ReactNode } from 'react';
import * as S from './styles';

interface CardDefaultProps {
  children: ReactNode;
}

const CardDefault = ({ children, ...restProps }: CardDefaultProps) => (
  <S.CardDefault {...restProps}>{children}</S.CardDefault>
);

export default CardDefault;
