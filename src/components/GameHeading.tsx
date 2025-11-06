import { Heading } from '@chakra-ui/react';
import type { GameQuery } from '../App';

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading size="4xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};
export default GameHeading;
