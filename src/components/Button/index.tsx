import { ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...restProps }: ButtonProps) => (
  <S.Button {...restProps}>{children}</S.Button>
);

export default Button;
