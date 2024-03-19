import styled, { css } from 'styled-components';
import Container from './Container';

const Card = styled.div<{ $bgUrl?: string; $bgColor?: string }>`
  background-color: var(--color-${props => props.$bgColor || 'normal'});
  width: 14rem;
  height: 10rem;
  border-radius: 15px;
  display: flex;
  ${props =>
    props.$bgUrl &&
    css`
      background-image: url(${props.$bgUrl});
      background-size: cover;
    `}
`;

const Title = styled.h1`
  font-size: 18px;
  color: white;
`;

const Type = styled.span`
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 12px;
  border-radius: 500px;
  margin: 3px 0 3px;
  padding: 3px 12px;
  width: fit-content;
`;

const Image = styled.div<{ $bgUrl: string }>`
  width: 90px;
  height: 90px;
  margin-top: 10px;
  ${props =>
    props.$bgUrl &&
    css`
      background-image: url(${props.$bgUrl});
      background-size: contain;
      background-position: center;
      transform: scaleX(-1);
      background-repeat: no-repeat;
    `}
`;

interface CardPokemonProps {
  name: string;
  types: any[];
  urlImage: string;
}

const CardPokemon = ({ name, types, urlImage }: CardPokemonProps) => {
  return (
    // get color based on first element type of pokémon
    <Card $bgColor={types[0].type.name.toLowerCase()}>
      <Container
        style={{
          flexDirection: 'column',
          padding: '0 16px',
          marginTop: '6px',
        }}
      >
        <Title>{name}</Title>
        <Container>
          <Container style={{ flexDirection: 'column', width: '60%' }}>
            {types &&
              types.map(pokeType => (
                <Type key={pokeType.type.name}>{pokeType.type.name}</Type>
              ))}
          </Container>
          <Image $bgUrl={urlImage} />
        </Container>
      </Container>
    </Card>
  );
};

export default CardPokemon;
