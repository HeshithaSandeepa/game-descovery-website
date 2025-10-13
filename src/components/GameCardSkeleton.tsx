import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height='200px' borderRadius={8} width={'350px'} />
      <CardBody>
        <SkeletonText gap={2} noOfLines={3} />
      </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton;