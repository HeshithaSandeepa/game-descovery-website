import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color: string = score > 75 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge
      color={color}
      fontSize={"16px"}
      paddingX={2}
      borderRadius={4}
      fontWeight={"bold"}
    >
      {score}</Badge>
  )
}

export default CriticScore