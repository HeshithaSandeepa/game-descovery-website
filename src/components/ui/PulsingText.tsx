
import { Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const pulseGlow = keyframes`
  from {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
  to {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
`;

function PulsingText() {
  return (
    <Text
      fontSize="4xl"
      fontWeight="bold"
      color="white"
      animation={`${pulseGlow} 1.5s ease-in-out infinite alternate`}
    >
      GAME APP
    </Text>
  );
}

export default PulsingText;