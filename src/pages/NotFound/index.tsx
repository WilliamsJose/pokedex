import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title/styles';
import * as S from './styles';

function NotFound({ text }: Readonly<{ text?: string }>) {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (
    <S.NotFoundContainer>
      <Title>Sorry!</Title>
      <S.NotFoundText>{text ?? 'Something wrong ocurred'}</S.NotFoundText>
      <p>
        <S.NotFoundButton onClick={goHome}>Go Home</S.NotFoundButton>
      </p>
    </S.NotFoundContainer>
  );
}

export default NotFound;
