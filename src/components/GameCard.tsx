import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import type { Game } from '../hooks/useGames';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <Card.Root overflow={'hidden'} display="flex" flexDirection="column">
        <Image src={game.background_image} />
        <CardBody display="flex" flexDirection="column" justifyContent="flex-end">
          <Heading mb={2}>
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconsList platforms={game.platforms.map((p) => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  )
}

export default GameCard;