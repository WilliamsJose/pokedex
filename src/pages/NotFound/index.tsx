import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title/styles';
import * as S from './styles';
import { Button } from '../../components/Button/styles';

function NotFound() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (
    <S.NotFoundContainer>
      <Title>Sorry!</Title>
      <p>Something wrong ocurred</p>
      <p>
        <Button onClick={goHome}>Go Home</Button>
      </p>
    </S.NotFoundContainer>
  );
}

export default NotFound;
