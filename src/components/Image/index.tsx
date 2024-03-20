import { ReactNode } from 'react';
import * as S from './styles';

interface ImageProps {
  children: ReactNode;
}

const Image = ({ children, ...restProps }: ImageProps) => (
  <S.Image {...restProps}>{children}</S.Image>
);

export default Image;
