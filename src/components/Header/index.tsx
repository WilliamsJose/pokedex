import * as S from './styles';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { HiOutlineHeart } from 'react-icons/hi2';

const Header = ({ ...restProps }) => (
  <S.Header {...restProps}>
    <S.ButtonExt>
      <HiArrowLongLeft />
    </S.ButtonExt>
    <S.ButtonExt>
      <HiOutlineHeart fontSize={23} />
    </S.ButtonExt>
  </S.Header>
);

export default Header;
