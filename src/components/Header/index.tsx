import * as S from './styles';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { HiOutlineHeart } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Header = ({ ...restProps }) => {
  const navigate = useNavigate();

  function goBackHistory() {
    navigate(-1);
  }

  return (
    <>
      <S.Header {...restProps}>
        <S.ButtonExt onClick={goBackHistory}>
          <HiArrowLongLeft />
        </S.ButtonExt>
        <S.ButtonExt>
          <HiOutlineHeart fontSize={23} />
        </S.ButtonExt>
      </S.Header>
      <ToastContainer />
    </>
  );
};

export default Header;
