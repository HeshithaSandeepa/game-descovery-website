
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import type { Game } from '../hooks/useGames';

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <Card.Root overflow={'hidden'}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading>{game.name}</Heading>
        </CardBody>
      </Card.Root>
    </>
  )
}

export default GameCard;